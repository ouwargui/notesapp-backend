import {Request, Response} from 'express';
import AuthenticateUserUseCase from './AuthenticateUserUseCase';

class AuthenticateUserController {
  private authenticateUserUseCase: AuthenticateUserUseCase;

  constructor(authenticateUserUseCase: AuthenticateUserUseCase) {
    this.authenticateUserUseCase = authenticateUserUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {email, password} = req.body;

    const result = await this.authenticateUserUseCase.execute({
      email,
      password,
    });

    return res.status(200).json({token: result});
  }
}

export default AuthenticateUserController;
