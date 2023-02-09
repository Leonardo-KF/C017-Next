import { ErrorType } from "./handle-error";

const errorHelper = new Map<ErrorType, number>();

errorHelper.set(ErrorType.DATABASE_ERROR, 500);
errorHelper.set(ErrorType.VALIDATION_ERROR, 400);
errorHelper.set(ErrorType.UNEXPECTED_ERROR, 500);
errorHelper.set(ErrorType.NOT_FOUND_ERROR, 404);
errorHelper.set(ErrorType.SERVER_ERROR, 500);
errorHelper.set(ErrorType.UNAUTHORIZED_ERROR, 401);
errorHelper.set(ErrorType.BAD_REQUEST_ERROR, 400);

export default errorHelper;
