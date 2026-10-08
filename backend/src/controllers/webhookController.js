import crypto from 'crypto';
import { logger } from '../utils/logger.js';
import { successResponse } from '../utils/apiResponse.js';

const PROCESSED_EVENT_IDS = new Set();

export const webhookController = {
  async handleGoogleWebhook(req, res, next) {
    try {
      const eventId = req.headers['x-goog-channel-id'] || `gmeet-${Date.now()}`;
      logger.info({ eventId }, 'Received Google Meet Webhook Event');

      if (PROCESSED_EVENT_IDS.has(eventId)) {
        return res.status(200).json({ success: true, message: 'Event already processed' });
      }
      PROCESSED_EVENT_IDS.add(eventId);

      return res.status(200).json({ success: true, eventId, status: 'QUEUED' });
    } catch (err) {
      next(err);
    }
  },

  async handleMicrosoftWebhook(req, res, next) {
    try {
      // Respond to MS Graph validation token challenge if present
      if (req.query && req.query.validationToken) {
        return res.status(200).send(req.query.validationToken);
      }

      const eventId = `teams-${Date.now()}`;
      logger.info({ eventId }, 'Received Microsoft Teams Webhook Event');

      return res.status(200).json({ success: true, eventId, status: 'QUEUED' });
    } catch (err) {
      next(err);
    }
  },

  async handleZoomWebhook(req, res, next) {
    try {
      // Zoom Webhook Challenge-Response validation
      if (req.body && req.body.event === 'endpoint.url_validation') {
        const plainToken = req.body.payload.plainToken;
        const hash = crypto.createHmac('sha256', 'zoom_secret').update(plainToken).digest('hex');
        return res.status(200).json({
          plainToken,
          encryptedToken: hash
        });
      }

      const eventId = req.body?.payload?.object?.id || `zoom-${Date.now()}`;
      logger.info({ eventId }, 'Received Zoom Webhook Event');

      if (PROCESSED_EVENT_IDS.has(eventId)) {
        return res.status(200).json({ success: true, message: 'Event already processed' });
      }
      PROCESSED_EVENT_IDS.add(eventId);

      return res.status(200).json({ success: true, eventId, status: 'QUEUED' });
    } catch (err) {
      next(err);
    }
  }
};
