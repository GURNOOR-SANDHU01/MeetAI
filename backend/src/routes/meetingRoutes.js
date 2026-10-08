import { Router } from 'express';
import { meetingController } from '../controllers/meetingController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = Router();

router.use(authenticate);

router.get('/', meetingController.listMeetings);
router.get('/:id', meetingController.getMeeting);
router.get('/:id/transcript', meetingController.getTranscript);
router.get('/:id/summary', meetingController.getSummary);
router.get('/:id/decisions', meetingController.getDecisions);
router.get('/:id/action-items', meetingController.getActionItems);

export default router;
