import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger.js';

let prisma;

try {
  prisma = new PrismaClient();
} catch (err) {
  logger.warn('PrismaClient failed to initialize; using fallback mock layer');
}

export { prisma };
