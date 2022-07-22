import {PrismaClient} from '@prisma/client';
import PrismaRepository from '../../../../db/PrismaRepository';
import {Note} from '../../models/Note';
import {ICreateNoteDTO, INotesRepository} from '../INotesRepository';

class NotesRepository implements INotesRepository {
  private db: PrismaClient;

  constructor() {
    this.db = PrismaRepository.getInstance();
  }

  async create({
    title,
    content,
    published,
    authorId,
  }: ICreateNoteDTO): Promise<Note> {
    const noteCreated = await this.db.note.create({
      data: {
        title,
        content,
        published: published ?? false,
        authorId,
        created_at: new Date(),
      },
    });

    return noteCreated;
  }
}

export default NotesRepository;
