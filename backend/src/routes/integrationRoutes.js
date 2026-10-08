import { Router } from 'express';
import { integrationController } from '../controllers/integrationController.js';
import { authenticate } from '../middleware/authMiddleware.js';
import { requireRole } from '../middleware/rbacMiddleware.js';

const router = Router();

router.use(authenticate);

router.get('/', integrationController.listIntegrations);
router.post('/:provider/connect', requireRole(['OWNER', 'ADMIN']), integrationController.connect);
router.delete('/:provider', requireRole(['OWNER', 'ADMIN']), integrationController.disconnect);

export default router;
