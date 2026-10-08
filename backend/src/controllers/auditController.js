import { auditService } from '../services/auditService.js';
import { successResponse } from '../utils/apiResponse.js';

export const auditController = {
  async listLogs(req, res, next) {
    try {
      const logs = await auditService.listAuditLogs(req.workspaceId);
      return successResponse(res, { logs });
    } catch (err) {
      next(err);
    }
  }
};
