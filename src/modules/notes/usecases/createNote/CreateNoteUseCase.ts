import {Note} from '../../models/Note';
import {INotesRepository} from '../../repositories/INotesRepository';

interface ICreateNote {
  title: string;
  content: string;
  published: boolean;
  authorId: string;
}

class CreateNoteUseCase {
  private notesRepository: INotesRepository;

  constructor(notesRepository: INotesRepository) {
    this.notesRepository = notesRepository;
  }

  async execute({
    title,
    content,
    published,
    authorId,
  }: ICreateNote): Promise<Note> {
    if (!title || !content || !authorId) {
      throw new Error('Missing required fields');
    }

    const note = await this.notesRepository.create({
      title,
      content,
      published,
      authorId: Number(authorId),
    });

    return note;
  }
}

export default CreateNoteUseCase;
