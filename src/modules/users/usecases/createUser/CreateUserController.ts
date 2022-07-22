import {Request, Response} from 'express';
import CreateUserUseCase from './CreateUserUseCase';

class CreateUserController {
  private createUserUseCase: CreateUserUseCase;

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {name, email, password} = req.body;

    const userCreated = await this.createUserUseCase.execute({
      name,
      email,
      password,
    });

    return res.status(201).json(userCreated);
  }
}

export default CreateUserController;
