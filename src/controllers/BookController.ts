import { Request, Response } from 'express';

import ControllerInterface from './ControllerInterface';

// Models
const db = require('../db/models');

class BookController implements ControllerInterface {
  index = async (_req: Request, res: Response): Promise<void> => {
    const books = await db.book.findAll({
      attributes: ['id', 'title', 'author'],
    });
    res.render('books/index', { books, title: 'Books' });
  }

  edit = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const book = await db.book.findOne({ where: { id } });
    return res.render('books/edit', { book });
  }

  new = (_req: Request, res: Response): void => {
    res.render('books/new');
  }

  create = async (req: Request, res: Response): Promise<void> => {
    const { title, isbn, author, publisher } = req.body;
    console.log(title)
    // res.render('books/new');
  }

  show(_req: Request, res: Response): Response {
    return res.send('show');
  }

  update(_req: Request, res: Response): Response {
    return res.send('update');
  }

  destroy = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    await db.book.destroy({ where: { id } });
    res.redirect('/books');
  }
}

export default new BookController();
