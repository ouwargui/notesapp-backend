import {Router} from 'express';
import {authenticateUserController} from '../modules/users/usecases/authenticateUser';
import {createUserController} from '../modules/users/usecases/createUser';

const userRoutes = Router();

userRoutes.post('/', (req, res) => createUserController.handle(req, res));
userRoutes.post('/auth', (req, res) =>
  authenticateUserController.handle(req, res),
);

export default userRoutes;
