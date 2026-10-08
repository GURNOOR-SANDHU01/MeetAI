import { meetingService } from '../services/meetingService.js';
import { auditService } from '../services/auditService.js';
import { successResponse } from '../utils/apiResponse.js';

export const meetingController = {
  async listMeetings(req, res, next) {
    try {
      const { page, limit, platform, search, status } = req.query;
      const result = await meetingService.listMeetings(req.workspaceId, {
        page,
        limit,
        platform,
        search,
        status
      });
      return successResponse(res, result.meetings, result.meta);
    } catch (err) {
      next(err);
    }
  },

  async getMeeting(req, res, next) {
    try {
      const meeting = await meetingService.getMeeting(req.workspaceId, req.params.id);

      await auditService.logEvent({
        workspaceId: req.workspaceId,
        actorId: req.user.userId,
        actorEmail: req.user.email,
        action: 'MEETING_ACCESS',
        resource: 'Meeting',
        resourceId: req.params.id,
        ipAddress: req.ip
      });

      return successResponse(res, { meeting });
    } catch (err) {
      next(err);
    }
  },

  async getTranscript(req, res, next) {
    try {
      const result = await meetingService.getTranscript(req.workspaceId, req.params.id);
      return successResponse(res, result);
    } catch (err) {
      next(err);
    }
  },

  async getSummary(req, res, next) {
    try {
      const result = await meetingService.getSummary(req.workspaceId, req.params.id);
      return successResponse(res, result);
    } catch (err) {
      next(err);
    }
  },

  async getDecisions(req, res, next) {
    try {
      const result = await meetingService.getDecisions(req.workspaceId, req.params.id);
      return successResponse(res, result);
    } catch (err) {
      next(err);
    }
  },

  async getActionItems(req, res, next) {
    try {
      const result = await meetingService.getActionItems(req.workspaceId, req.params.id);
      return successResponse(res, result);
    } catch (err) {
      next(err);
    }
  }
};
