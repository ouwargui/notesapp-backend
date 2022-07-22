import {NextFunction, Request, response, Response} from 'express';
import {verify} from 'jsonwebtoken';

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

  const [, token] = authHeader.split(' ');

  try {
    const {sub} = verify(token, process.env.JWT_KEY!);

    req.user_id = sub as string;

    return next();
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }
}
