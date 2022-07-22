import {Note} from '../models/Note';

export interface ICreateNoteDTO {
  title: string;
  content: string;
  published?: boolean;
  authorId: number;
}

export interface INotesRepository {
  create({title, content, published}: ICreateNoteDTO): Promise<Note>;
}
