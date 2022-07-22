import {NextFunction, Request, Response} from 'express';
import {verify} from 'jsonwebtoken';
import {JWT_SECRET} from '../config/env';

export async function authHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: 'Token not provided',
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const {sub} = verify(token, JWT_SECRET!);

    req.user_id = sub as string;

    return next();
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }
}
