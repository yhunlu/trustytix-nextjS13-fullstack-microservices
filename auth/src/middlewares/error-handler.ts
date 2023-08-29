import { Request, Response, NextFunction } from 'express';
import { DatabaseConnectionError, RequestValidationError } from '../errors';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    console.log('handling this error as a request validation error');
  }

  if (err instanceof DatabaseConnectionError) {
    console.log('handling this error as a db connection error');
  }

  res.status(400).send({
    message: err.message,
  });
};
