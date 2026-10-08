import pino from 'pino';
import { config } from '../config/env.js';

export const logger = pino({
  level: config.nodeEnv === 'test' ? 'silent' : 'info',
  redact: {
    paths: [
      'password',
      'passwordHash',
      'token',
      'accessToken',
      'refreshToken',
      'encryptedAccessToken',
      'encryptedRefreshToken',
      'authorization',
      'headers.authorization',
      'req.headers.authorization',
      '*.password',
      '*.token'
    ],
    remove: true
  },
  transport: config.nodeEnv === 'development'
    ? { target: 'pino-pretty', options: { colorize: true } }
    : undefined
});
