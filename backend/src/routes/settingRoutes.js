import { Router } from 'express';
import { settingController } from '../controllers/settingController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = Router();

router.use(authenticate);

router.get('/', settingController.getSettings);
router.patch('/', settingController.updateSettings);

export default router;
