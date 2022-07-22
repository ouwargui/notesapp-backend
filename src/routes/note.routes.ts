import {Router} from 'express';
import {createNoteController} from '../modules/notes/usecases/createNote';

const noteRoutes = Router();

noteRoutes.post('/', (req, res) => createNoteController.handle(req, res));

export default noteRoutes;
