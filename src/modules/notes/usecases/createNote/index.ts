import NotesRepository from '../../repositories/implementations/NotesRepository';
import CreateNoteController from './CreateNoteController';
import CreateNoteUseCase from './CreateNoteUseCase';

const notesRepository = new NotesRepository();
const createNotesUseCase = new CreateNoteUseCase(notesRepository);
const createNoteController = new CreateNoteController(createNotesUseCase);

export {createNoteController};
