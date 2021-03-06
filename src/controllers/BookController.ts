import { Request, Response } from 'express';

import ControllerInterface from './ControllerInterface';

// Models
const db = require('../db/models');

class BookController implements ControllerInterface {
  index = async (_req: Request, res: Response): Promise<void> => {
    try {
      const books = await db.book.findAll({
        attributes: ['id', 'tittle', 'isbn', 'publisher', 'released', 'stock', 'cover', 'author'],
      });
      res.render('books/index', { books, tittle: 'Books' });
    } catch (e) {
      res.send(e);
    }
  }

  show = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const book = await db.book.findOne({ where: { id }, attributes: ['id', 'tittle', 'isbn', 'publisher', 'released', 'stock', 'cover', 'author'] });
      res.render('books/edit', { book });
    } catch (e) {
      res.send(e);
    }
  }

  new = (_req: Request, res: Response): void => {
    try {
      res.render('books/new');
    } catch (e) {
      res.send(e);
    }
  }

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const
        {
          tittle, isbn, author, publisher, released, stock, cover,
        } = req.body;
      const data = {
        tittle,
        isbn,
        author,
        publisher,
        released,
        stock,
        cover,
      };
      await db.book.create(data);
      res.redirect('/admin/books');
    } catch (e) {
      res.send(e);
    }
  }

  update = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params;
      const { tittle, stock } = req.body;
      await db.book.update({ tittle, stock }, { where: id });
      res.redirect('/admin/books');
    } catch (e) {
      res.send(e);
    }
  }

  destroy = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      await db.book.destroy({ where: { id } });
      res.redirect('/admin/books');
    } catch (e) {
      res.send(e);
    }
  }
}

export default new BookController();
