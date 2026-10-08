import { aiService } from '../services/aiService.js';
import { auditService } from '../services/auditService.js';
import { successResponse } from '../utils/apiResponse.js';

export const aiController = {
  async search(req, res, next) {
    try {
      const { q } = req.query;
      const result = await aiService.searchMeetings(req.workspaceId, q);

      await auditService.logEvent({
        workspaceId: req.workspaceId,
        actorId: req.user.userId,
        actorEmail: req.user.email,
        action: 'AI_RAG_SEARCH',
        resource: 'AISearch',
        details: `Query: ${q?.substring(0, 50)}`,
        ipAddress: req.ip
      });

      return successResponse(res, result);
    } catch (err) {
      next(err);
    }
  },

  async queryMeeting(req, res, next) {
    try {
      const { query } = req.body;
      const result = await aiService.queryMeeting(req.workspaceId, req.params.id, query);
      return successResponse(res, result);
    } catch (err) {
      next(err);
    }
  }
};
