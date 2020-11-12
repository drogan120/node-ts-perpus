import { Request, Response } from 'express';

import ControllerInterface from './ControllerInterface';

// Models
const db = require('../db/models');

class BookController implements ControllerInterface {
  index = async (_req: Request, res: Response): Promise<any> => {
    const books = await db.book.findAll({
      attributes: ['id', 'title', 'author'],
    });
    return res.render('books/index', { books });
  }

  create(_req: Request, res: Response): Response {
    return res.send('create');
  }

  show(_req: Request, res: Response): Response {
    return res.send('show');
  }

  update(_req: Request, res: Response): Response {
    return res.send('update');
  }

  destroy(_req: Request, res: Response): Response {
    return res.send('destroy');
  }
}

export default new BookController();
