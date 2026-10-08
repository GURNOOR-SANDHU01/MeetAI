import { logger } from '../utils/logger.js';
import { errorResponse } from '../utils/apiResponse.js';

export const errorHandler = (err, req, res, next) => {
  logger.error({
    err,
    requestId: req.headers['x-request-id'],
    url: req.originalUrl,
    method: req.method
  }, 'Unhandled Application Error');

  const statusCode = err.statusCode || err.status || 500;
  const errorCode = err.code || 'INTERNAL_SERVER_ERROR';
  const publicMessage = statusCode === 500 ? 'An internal server error occurred' : err.message;

  return errorResponse(res, errorCode, publicMessage, statusCode);
};
