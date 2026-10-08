import { successResponse } from '../utils/apiResponse.js';

export const settingController = {
  async getSettings(req, res, next) {
    try {
      return successResponse(res, {
        settings: {
          summaryLength: 'Balanced',
          autoActionItems: true,
          crossMeetingSearch: true,
          retentionDays: 365
        }
      });
    } catch (err) {
      next(err);
    }
  },

  async updateSettings(req, res, next) {
    try {
      return successResponse(res, {
        settings: req.body,
        message: 'Settings updated successfully'
      });
    } catch (err) {
      next(err);
    }
  }
};
