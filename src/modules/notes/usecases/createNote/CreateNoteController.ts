import {Request, Response} from 'express';
import CreateNoteUseCase from './CreateNoteUseCase';

class CreateNoteController {
  private createNoteUseCase: CreateNoteUseCase;

  constructor(createNoteUseCase: CreateNoteUseCase) {
    this.createNoteUseCase = createNoteUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {title, content, published} = req.body;
    const {user_id} = req;

    const noteCreated = await this.createNoteUseCase.execute({
      title,
      content,
      published,
      authorId: user_id,
    });

    return res.status(201).json({note: noteCreated});
  }
}

export default CreateNoteController;
