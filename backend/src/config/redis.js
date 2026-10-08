import Redis from 'ioredis';
import { config } from './env.js';
import { logger } from '../utils/logger.js';

let redisClient = null;

export const getRedisClient = () => {
  if (!redisClient) {
    try {
      redisClient = new Redis(config.redisUrl, {
        maxRetriesPerRequest: null,
        enableReadyCheck: false,
        lazyConnect: true,
      });

      redisClient.on('error', (err) => {
        logger.warn(`Redis connection warning: ${err.message}`);
      });
    } catch (err) {
      logger.warn(`Redis client creation failed: ${err.message}`);
    }
  }
  return redisClient;
};
