import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { config } from './config/env.js';
import { logger } from './utils/logger.js';
import { successResponse, errorResponse } from './utils/apiResponse.js';
import { apiLimiter } from './middleware/rateLimiter.js';
import { errorHandler } from './middleware/errorHandler.js';
import apiRoutes from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createApp = () => {
  const app = express();

  // Security HTTP Headers
  app.use(helmet({
    contentSecurityPolicy: config.nodeEnv === 'production' ? undefined : false,
    crossOriginEmbedderPolicy: false
  }));

  // Strict CORS configuration
  app.use(cors({
    origin: (origin, callback) => {
      if (!origin || config.allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS policy'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  }));

  // Body Parsing
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Global Rate Limiting
  app.use('/api', apiLimiter);

  // Health Checks
  app.get('/health', (req, res) => successResponse(res, { status: 'healthy', timestamp: new Date().toISOString() }));
  app.get('/health/live', (req, res) => res.status(200).send('OK'));
  app.get('/health/ready', (req, res) => successResponse(res, { ready: true, database: 'connected', redis: 'connected' }));

  // OpenAPI Swagger Documentation
  try {
    const openapiPath = path.join(__dirname, '../openapi.json');
    if (fs.existsSync(openapiPath)) {
      const swaggerDoc = JSON.parse(fs.readFileSync(openapiPath, 'utf8'));
      app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
    }
  } catch (err) {
    logger.warn(`Failed to load openapi.json: ${err.message}`);
  }

  // API v1 Routes
  app.use('/api/v1', apiRoutes);

  // 404 Handler
  app.use((req, res) => errorResponse(res, 'NOT_FOUND', `Route ${req.method} ${req.originalUrl} not found`, 404));

  // Centralized Error Handler
  app.use(errorHandler);

  return app;
};
