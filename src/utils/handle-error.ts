export enum ErrorType {
  DATABASE_ERROR,
  VALIDATION_ERROR,
  UNEXPECTED_ERROR,
  NOT_FOUND_ERROR,
  SERVER_ERROR,
  UNAUTHORIZED_ERROR,
  BAD_REQUEST_ERROR,
}

export class Exceptions {
  static handle(error: ErrorType | any, message: string) {
    if (error instanceof Error) {
      return {
        status: 500,
        message: error.message,
      };
    }
    return global.errorMediator.mediator(error, message);
  }
}
