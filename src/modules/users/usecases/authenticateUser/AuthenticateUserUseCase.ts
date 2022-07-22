import {compare} from 'bcrypt';
import {sign} from 'jsonwebtoken';
import {JWT_SECRET} from '../../../../config/env';
import {IUsersRepository} from '../../repositories/IUsersRepository';

interface IAuthenticateUser {
  email: string;
  password: string;
}

class AuthenticateUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({email, password}: IAuthenticateUser): Promise<string> {
    const userFound = await this.usersRepository.findByEmail(email);

    if (!userFound) {
      throw new Error('Email or password invalid');
    }

    const passwordMatch = await compare(password, userFound.password);

    if (!passwordMatch) {
      throw new Error('Email or password invalid');
    }

    const token = sign({email}, JWT_SECRET!, {
      subject: userFound.id.toString(),
      expiresIn: '1d',
    });

    return token;
  }
}

export default AuthenticateUserUseCase;
