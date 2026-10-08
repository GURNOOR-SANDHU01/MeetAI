import { authService } from '../services/authService.js';
import { auditService } from '../services/auditService.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';

export const authController = {
  async signup(req, res, next) {
    try {
      const result = await authService.signup(req.body);

      await auditService.logEvent({
        workspaceId: result.user.workspaceId,
        actorId: result.user.id,
        actorEmail: result.user.email,
        action: 'USER_SIGNUP',
        resource: 'User',
        resourceId: result.user.id,
        ipAddress: req.ip
      });

      return successResponse(res, result, {}, 201);
    } catch (err) {
      next(err);
    }
  },

  async login(req, res, next) {
    try {
      const result = await authService.login(req.body);

      await auditService.logEvent({
        workspaceId: result.user.workspaceId,
        actorId: result.user.id,
        actorEmail: result.user.email,
        action: 'USER_LOGIN',
        resource: 'Auth',
        resourceId: result.user.id,
        ipAddress: req.ip
      });

      return successResponse(res, result);
    } catch (err) {
      next(err);
    }
  },

  async logout(req, res, next) {
    try {
      if (req.user) {
        await auditService.logEvent({
          workspaceId: req.user.workspaceId,
          actorId: req.user.userId,
          actorEmail: req.user.email,
          action: 'USER_LOGOUT',
          resource: 'Auth',
          resourceId: req.user.userId,
          ipAddress: req.ip
        });
      }
      return successResponse(res, { message: 'Logged out successfully' });
    } catch (err) {
      next(err);
    }
  },

  async me(req, res, next) {
    try {
      const user = await authService.me(req.user.userId);
      return successResponse(res, { user });
    } catch (err) {
      next(err);
    }
  }
};
