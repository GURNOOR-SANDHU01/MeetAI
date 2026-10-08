import { errorResponse } from '../utils/apiResponse.js';

export const validate = (schema) => {
  return (req, res, next) => {
    try {
      const parsed = schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      if (parsed.body) req.body = parsed.body;
      if (parsed.query) req.query = parsed.query;
      if (parsed.params) req.params = parsed.params;

      next();
    } catch (err) {
      const issue = err.errors ? err.errors[0]?.message : err.message;
      return errorResponse(res, 'VALIDATION_ERROR', `Input validation failed: ${issue}`, 400);
    }
  };
};
