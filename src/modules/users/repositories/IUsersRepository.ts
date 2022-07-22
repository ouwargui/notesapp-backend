import {User} from '../models/User';

export interface ICreateUserDTO {
  email: string;
  password: string;
  name: string;
}

export interface IUsersRepository {
  create({email, password, name}: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
