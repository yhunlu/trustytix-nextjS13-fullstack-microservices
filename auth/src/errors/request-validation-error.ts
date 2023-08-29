import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  constructor(public error: ValidationError[]) {
    super();

    // extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
