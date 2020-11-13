import { Request, Response } from 'express';

import ControllerInterface from './ControllerInterface';

// Models
const db = require('../db/models');

class BookController implements ControllerInterface {
  index = async (_req: Request, res: Response): Promise<any> => {
    const books = await db.book.findAll({
      attributes: ['id', 'title', 'author'],
    });
    return res.render('books/index', { books, title: 'Books' });
  }

  edit = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const book = await db.book.findOne({ where: { id } });
    return res.render('books/edit', { book });
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
