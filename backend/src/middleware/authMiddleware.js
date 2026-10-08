import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';
import { errorResponse } from '../utils/apiResponse.js';

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  let token = null;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7);
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return errorResponse(res, 'UNAUTHORIZED', 'Authentication token required', 401);
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    req.workspaceId = decoded.workspaceId;
    next();
  } catch (err) {
    return errorResponse(res, 'UNAUTHORIZED', 'Invalid or expired authentication token', 401);
  }
};
