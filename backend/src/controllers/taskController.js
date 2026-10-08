import { taskService } from '../services/taskService.js';
import { successResponse } from '../utils/apiResponse.js';

export const taskController = {
  async listTasks(req, res, next) {
    try {
      const { status, priority, search } = req.query;
      const tasks = await taskService.listTasks(req.workspaceId, { status, priority, search });
      return successResponse(res, { tasks });
    } catch (err) {
      next(err);
    }
  },

  async updateTaskStatus(req, res, next) {
    try {
      const { status } = req.body;
      const updated = await taskService.updateTaskStatus(req.workspaceId, req.params.id, status);
      return successResponse(res, { task: updated });
    } catch (err) {
      next(err);
    }
  }
};
