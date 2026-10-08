import { notificationService } from '../services/notificationService.js';
import { successResponse } from '../utils/apiResponse.js';

export const notificationController = {
  async listNotifications(req, res, next) {
    try {
      const notifications = await notificationService.listNotifications(req.user.userId, req.workspaceId);
      return successResponse(res, { notifications });
    } catch (err) {
      next(err);
    }
  },

  async markAsRead(req, res, next) {
    try {
      const notification = await notificationService.markAsRead(req.user.userId, req.params.id);
      return successResponse(res, { notification });
    } catch (err) {
      next(err);
    }
  }
};
