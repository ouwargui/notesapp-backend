import {NextFunction, Request, Response} from 'express';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
): Response {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res
    .status(500)
    .json({status: 'error', message: 'Internal server error'});
}
