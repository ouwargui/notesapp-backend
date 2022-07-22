import {Router} from 'express';
import {createUserController} from '../modules/users/usecases/createUser';

const userRoutes = Router();

userRoutes.post('/', (req, res) => createUserController.handle(req, res));

export default userRoutes;
