import { Router } from 'express';
import { webhookController } from '../controllers/webhookController.js';
import { webhookLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.use(webhookLimiter);

router.post('/google', webhookController.handleGoogleWebhook);
router.post('/microsoft', webhookController.handleMicrosoftWebhook);
router.post('/zoom', webhookController.handleZoomWebhook);

export default router;
