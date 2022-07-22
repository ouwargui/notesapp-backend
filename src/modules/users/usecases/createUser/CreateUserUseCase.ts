import {hash} from 'bcrypt';
import {User} from '../../models/User';
import {IUsersRepository} from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({name, email, password}: IRequest): Promise<User> {
    if (!name || !email || !password) {
      throw new Error('Missing required fields');
    }

    const userFound = await this.usersRepository.findByEmail(email);

    if (userFound) {
      throw new Error('User already exists');
    }

    const hashPassword = await hash(password, 10);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
    });

    return user;
  }
}

export default CreateUserUseCase;
