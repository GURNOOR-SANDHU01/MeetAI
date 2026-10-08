import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { config } from '../config/env.js';

// In-Memory storage repository fallback when database is starting
const MEMORY_USERS = new Map();
const MEMORY_WORKSPACES = new Map();
const MEMORY_TOKENS = new Set();

// Seed initial default user for immediate testing/demo
const initialWorkspaceId = 'ws-acme-corp';
MEMORY_WORKSPACES.set(initialWorkspaceId, {
  id: initialWorkspaceId,
  name: 'Acme Corp Workspace',
  plan: 'Enterprise Pro',
  retentionDays: 365
});

const defaultPasswordHash = bcrypt.hashSync('password123', 10);
const initialUser = {
  id: 'u1',
  name: 'Gurnoor Singh',
  email: 'gurnoor@acme-corp.com',
  passwordHash: defaultPasswordHash,
  role: 'OWNER',
  workspaceId: initialWorkspaceId,
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
};
MEMORY_USERS.set(initialUser.email, initialUser);

export const authService = {
  async signup({ name, email, password, workspaceName }) {
    const existing = MEMORY_USERS.get(email.toLowerCase());
    if (existing) {
      const err = new Error('User with this email already exists');
      err.statusCode = 400;
      err.code = 'USER_EXISTS';
      throw err;
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const workspaceId = `ws-${uuidv4()}`;
    const userId = `u-${uuidv4()}`;

    const workspace = {
      id: workspaceId,
      name: workspaceName || 'My Workspace',
      plan: 'Enterprise Pro',
      retentionDays: 365,
      createdAt: new Date().toISOString()
    };
    MEMORY_WORKSPACES.set(workspaceId, workspace);

    const user = {
      id: userId,
      name,
      email: email.toLowerCase(),
      passwordHash,
      role: 'OWNER',
      workspaceId,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      createdAt: new Date().toISOString()
    };
    MEMORY_USERS.set(email.toLowerCase(), user);

    const token = this.generateToken(user);
    const refreshToken = uuidv4();
    MEMORY_TOKENS.add(refreshToken);

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        workspaceId: user.workspaceId,
        avatar: user.avatar
      },
      token,
      refreshToken
    };
  },

  async login({ email, password }) {
    const user = MEMORY_USERS.get(email.toLowerCase());
    if (!user) {
      const err = new Error('Invalid email or password');
      err.statusCode = 401;
      err.code = 'INVALID_CREDENTIALS';
      throw err;
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      const err = new Error('Invalid email or password');
      err.statusCode = 401;
      err.code = 'INVALID_CREDENTIALS';
      throw err;
    }

    const token = this.generateToken(user);
    const refreshToken = uuidv4();
    MEMORY_TOKENS.add(refreshToken);

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        workspaceId: user.workspaceId,
        avatar: user.avatar
      },
      token,
      refreshToken
    };
  },

  async me(userId) {
    for (const u of MEMORY_USERS.values()) {
      if (u.id === userId) {
        const workspace = MEMORY_WORKSPACES.get(u.workspaceId) || { name: 'Acme Corp Workspace' };
        return {
          id: u.id,
          name: u.name,
          email: u.email,
          role: u.role,
          workspaceId: u.workspaceId,
          workspaceName: workspace.name,
          avatar: u.avatar
        };
      }
    }
    const err = new Error('User not found');
    err.statusCode = 404;
    throw err;
  },

  generateToken(user) {
    return jwt.sign(
      {
        userId: user.id,
        email: user.email,
        workspaceId: user.workspaceId,
        role: user.role
      },
      config.jwtSecret,
      { expiresIn: '24h' }
    );
  }
};
