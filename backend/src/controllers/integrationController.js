import { integrationService } from '../services/integrationService.js';
import { auditService } from '../services/auditService.js';
import { successResponse } from '../utils/apiResponse.js';

export const integrationController = {
  async listIntegrations(req, res, next) {
    try {
      const integrations = await integrationService.listIntegrations(req.workspaceId);
      return successResponse(res, { integrations });
    } catch (err) {
      next(err);
    }
  },

  async connect(req, res, next) {
    try {
      const { provider } = req.params;
      const { code, connectedAccount } = req.body;
      const result = await integrationService.connectIntegration(req.workspaceId, provider, { code, connectedAccount });

      await auditService.logEvent({
        workspaceId: req.workspaceId,
        actorId: req.user.userId,
        actorEmail: req.user.email,
        action: 'OAUTH_CONNECT',
        resource: 'Integration',
        resourceId: provider,
        ipAddress: req.ip
      });

      return successResponse(res, result);
    } catch (err) {
      next(err);
    }
  },

  async disconnect(req, res, next) {
    try {
      const { provider } = req.params;
      const result = await integrationService.disconnectIntegration(req.workspaceId, provider);

      await auditService.logEvent({
        workspaceId: req.workspaceId,
        actorId: req.user.userId,
        actorEmail: req.user.email,
        action: 'OAUTH_DISCONNECT',
        resource: 'Integration',
        resourceId: provider,
        ipAddress: req.ip
      });

      return successResponse(res, result);
    } catch (err) {
      next(err);
    }
  }
};
