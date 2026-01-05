import { ErrorRequestHandler } from 'express';
export const errorMiddleware: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  console.error('global error:', err);

  const statusCode = err.status || 500;
  const message =
    err.message || 'Internal Server Error';

  res.status(statusCode).json({
    status: 'error',
    message,
  });
};
