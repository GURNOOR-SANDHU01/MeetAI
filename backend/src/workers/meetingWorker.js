import { Worker } from 'bullmq';
import { config } from '../config/env.js';
import { logger } from '../utils/logger.js';
import { sanitizeTranscriptText } from '../security/promptInjection.js';

let meetingWorker = null;

try {
  meetingWorker = new Worker(
    'meeting-processing',
    async (job) => {
      const { meetingId, workspaceId, transcriptText } = job.data;
      logger.info({ meetingId, workspaceId, jobId: job.id }, 'Processing meeting AI job');

      // 1. Sanitize input text & defend against prompt injection
      const cleanText = sanitizeTranscriptText(transcriptText);

      // 2. AI Processing steps (Summary, Key Points, Decisions, Action Items, Embeddings)
      // Simulating processing step delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      logger.info({ meetingId, workspaceId }, 'Meeting AI processing complete');
      return { success: true, meetingId };
    },
    {
      connection: { url: config.redisUrl },
      concurrency: 5
    }
  );

  meetingWorker.on('failed', (job, err) => {
    logger.error({ jobId: job?.id, err: err.message }, 'Meeting AI job failed');
  });
} catch (err) {
  logger.warn(`BullMQ Worker initialization skipped: ${err.message}`);
}

export { meetingWorker };
