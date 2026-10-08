import { Router } from 'express';
import { taskController } from '../controllers/taskController.js';
import { authenticate } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validateMiddleware.js';
import { updateTaskStatusSchema } from '../validators/taskValidator.js';

const router = Router();

router.use(authenticate);

router.get('/', taskController.listTasks);
router.patch('/:id', validate(updateTaskStatusSchema), taskController.updateTaskStatus);

export default router;
