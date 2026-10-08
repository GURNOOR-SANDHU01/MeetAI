import { Router } from 'express';
import { auditController } from '../controllers/auditController.js';
import { authenticate } from '../middleware/authMiddleware.js';
import { requireRole } from '../middleware/rbacMiddleware.js';

const router = Router();

router.use(authenticate);
router.use(requireRole(['OWNER', 'ADMIN']));

router.get('/', auditController.listLogs);

export default router;
