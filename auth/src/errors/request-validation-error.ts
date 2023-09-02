import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public error: ValidationError[]) {
    super();

    // extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.error.map((err) => {
      if (err.type === 'field') {
        return { message: err.msg, field: err.path };
      }

      return { message: err.msg };
    });
  }
}
