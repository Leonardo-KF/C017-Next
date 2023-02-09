import errorHelper from "@/utils/error-helper";
import { ErrorType } from "@/utils/handle-error";
import { throws } from "assert";

export type ResponseError = {
  status: number;
  message: string;
};

declare global {
  var errorMediator: ErrorMediator;
}

export class ErrorMediator {
  private errors = new Map<ErrorType, ResponseError>();

  addError(type: ErrorType, message: string) {
    this.errors.set(type, { message, status: errorHelper.get(type) ?? 500 });
  }

  mediator(type: ErrorType, message: string) {
    const data = this.errors.get(type);

    return {
      ...data,
      message: data?.message + "-" + message,
    };
  }
}

global.errorMediator = new ErrorMediator();

global.errorMediator.addError(ErrorType.DATABASE_ERROR, "Database error");
global.errorMediator.addError(ErrorType.VALIDATION_ERROR, "Validation error");
global.errorMediator.addError(ErrorType.UNEXPECTED_ERROR, "Unexpected error");
global.errorMediator.addError(ErrorType.NOT_FOUND_ERROR, "Not found error");
global.errorMediator.addError(ErrorType.SERVER_ERROR, "Server error");
global.errorMediator.addError(
  ErrorType.UNAUTHORIZED_ERROR,
  "Unauthorized error"
);
global.errorMediator.addError(ErrorType.BAD_REQUEST_ERROR, "Bad request error");
