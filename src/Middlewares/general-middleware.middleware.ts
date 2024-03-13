import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from '@nestjs/common';

export function simpleLoggerMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(`Request ${req.method} ${req.url}`);
  next();
}

export function notFoundMiddleware(req: Request, res: Response, next: NextFunction) {
  const error = new Error('Not Found');
  res.status(HttpStatus.NOT_FOUND).json({
    message: error.message,
    statusCode: HttpStatus.NOT_FOUND,
  });
}
