export const successResponse = (res, data = {}, meta = {}, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    data,
    meta
  });
};

export const errorResponse = (res, code = 'INTERNAL_ERROR', message = 'An unexpected error occurred', statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    error: {
      code,
      message
    }
  });
};
