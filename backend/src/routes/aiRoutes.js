import { Router } from 'express';
import { aiController } from '../controllers/aiController.js';
import { authenticate } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validateMiddleware.js';
import { aiSearchLimiter } from '../middleware/rateLimiter.js';
import { aiSearchSchema, meetingQuerySchema } from '../validators/aiValidator.js';

const router = Router();

router.use(authenticate);

router.get('/search', aiSearchLimiter, validate(aiSearchSchema), aiController.search);
router.post('/meetings/:id', aiSearchLimiter, validate(meetingQuerySchema), aiController.queryMeeting);

export default router;
