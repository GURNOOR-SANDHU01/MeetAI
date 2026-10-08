import rateLimit from 'express-rate-limit';
import { errorResponse } from '../utils/apiResponse.js';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300,
  handler: (req, res) => {
    return errorResponse(res, 'RATE_LIMIT_EXCEEDED', 'Too many requests, please try again later', 429);
  }
});

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  handler: (req, res) => {
    return errorResponse(res, 'RATE_LIMIT_EXCEEDED', 'Too many authentication attempts, please try again in 15 minutes', 429);
  }
});

export const aiSearchLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30,
  handler: (req, res) => {
    return errorResponse(res, 'RATE_LIMIT_EXCEEDED', 'AI search rate limit exceeded, please slow down', 429);
  }
});

export const webhookLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  handler: (req, res) => {
    return errorResponse(res, 'RATE_LIMIT_EXCEEDED', 'Webhook throughput limit exceeded', 429);
  }
});
