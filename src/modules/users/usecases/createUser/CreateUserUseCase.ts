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

    const user = await this.usersRepository.create({
      name,
      email,
      password,
    });

    return user;
  }
}

export default CreateUserUseCase;
