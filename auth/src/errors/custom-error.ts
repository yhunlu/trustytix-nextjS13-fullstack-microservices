/*
 * CustomError class represents a custom error object.
 */
export abstract class CustomError extends Error {
  /*
   * Constructs a new instance of the CustomError class.
   */
  abstract statusCode: number;

  constructor() {
    // Call the parent constructor
    super();

    // Set the prototype of this object to CustomError.prototype
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
