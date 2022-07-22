import {Router} from 'express';
import {authHandler} from '../middlewares/authHandler';
import noteRoutes from './note.routes';
import userRoutes from './user.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/note', authHandler, noteRoutes);

export default router;
