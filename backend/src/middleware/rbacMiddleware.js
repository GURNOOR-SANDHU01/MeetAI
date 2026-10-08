import { errorResponse } from '../utils/apiResponse.js';

export const requireRole = (allowedRoles = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return errorResponse(res, 'UNAUTHORIZED', 'Authentication required', 401);
    }

    const userRole = req.user.role;
    if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
      return errorResponse(res, 'FORBIDDEN', 'Insufficient workspace role permissions', 403);
    }

    next();
  };
};

export const verifyWorkspaceMatch = (resourceWorkspaceId, reqWorkspaceId) => {
  if (!resourceWorkspaceId || !reqWorkspaceId) return false;
  return resourceWorkspaceId === reqWorkspaceId;
};
