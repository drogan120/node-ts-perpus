import { Request, Response } from 'express';

const { Op } = require('sequelize');
const db = require('../db/models');

class HomeController {
  index = async (req: Request, res: Response): Promise<void> => {
    res.render('home/index');
  }

  search = async (req: Request, res: Response): Promise<void> => {
    try {
      const { keyword } = req.body;
      const data = await db.book.findAll({
        where: {
          tittle: {
            [Op.like]: `%${keyword}%`,
          },
        },
      });
      res.render('home/index', { data });
    } catch (e) {
      res.send(e);
    }
  }

  bookInfo = async (req:Request, res:Response):Promise<void> => {
    try {
      const { isbn } = req.params;
      const book = await db.book.findOne({
        where: {
          isbn: {
            [Op.like]: `%${isbn}%`,
          },
        },
      });
      res.render('home/booksdetail', { book });
    } catch (err) {
      res.send(err);
    }
  }
}
export default new HomeController();
