import { Queue } from 'bullmq';
import { config } from '../config/env.js';
import { logger } from '../utils/logger.js';

let meetingQueue = null;

try {
  meetingQueue = new Queue('meeting-processing', {
    connection: {
      url: config.redisUrl
    },
    defaultJobOptions: {
      attempts: 3,
      backoff: {
        type: 'exponential',
        delay: 2000
      },
      removeOnComplete: true
    }
  });
} catch (err) {
  logger.warn(`BullMQ Queue creation skipped: ${err.message}`);
}

export { meetingQueue };
