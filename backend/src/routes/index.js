import { Router } from 'express';
import authRoutes from './authRoutes.js';
import meetingRoutes from './meetingRoutes.js';
import taskRoutes from './taskRoutes.js';
import aiRoutes from './aiRoutes.js';
import integrationRoutes from './integrationRoutes.js';
import notificationRoutes from './notificationRoutes.js';
import auditRoutes from './auditRoutes.js';
import settingRoutes from './settingRoutes.js';
import webhookRoutes from './webhookRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/meetings', meetingRoutes);
router.use('/tasks', taskRoutes);
router.use('/ai', aiRoutes);
router.use('/integrations', integrationRoutes);
router.use('/notifications', notificationRoutes);
router.use('/audit-logs', auditRoutes);
router.use('/settings', settingRoutes);
router.use('/webhooks', webhookRoutes);

export default router;
