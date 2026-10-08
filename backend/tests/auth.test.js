import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app.js';

const app = createApp();

describe('Auth API Endpoints', () => {
  it('POST /api/v1/auth/login should authenticate valid user credentials', async () => {
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'gurnoor@acme-corp.com',
        password: 'password123'
      });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.token).toBeDefined();
    expect(res.body.data.user.email).toBe('gurnoor@acme-corp.com');
  });

  it('POST /api/v1/auth/login should reject invalid passwords', async () => {
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'gurnoor@acme-corp.com',
        password: 'wrongpassword'
      });

    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
    expect(res.body.error.code).toBe('INVALID_CREDENTIALS');
  });

  it('GET /api/v1/auth/me should require a valid Bearer token', async () => {
    const res = await request(app).get('/api/v1/auth/me');

    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });
});
