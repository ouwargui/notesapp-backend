import {PrismaClient} from '@prisma/client';
import PrismaRepository from '../../../../db/PrismaRepository';
import {User} from '../../models/User';
import {ICreateUserDTO, IUsersRepository} from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private db: PrismaClient;

  constructor() {
    this.db = PrismaRepository.getInstance();
  }

  async create({email, password, name}: ICreateUserDTO): Promise<User> {
    const userCreated = await this.db.user.create({
      data: {
        email,
        password,
        name,
        created_at: new Date(),
      },
    });

    return userCreated;
  }
}

export default UsersRepository;
