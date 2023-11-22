import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors';

/*
 *
 * Error handler middleware.
 *
 * @param err - The error object.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next function.
 */

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Check if the error is an instance of CustomError
  if (err instanceof CustomError) {
    // If it is, send the serialized errors with the corresponding status code
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  // If the error is not an instance of CustomError, send a generic error message with status code 400
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
