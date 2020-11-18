import { Request, Response } from 'express';

const db = require('../db/models');
const { Op } = require('sequelize')
class HomeController {
  index = async (req: Request, res: Response): Promise<void> => {
    res.render('home/index');
  }

  search = async (req: Request, res: Response): Promise<void> => {
    try {
      const { keyword } = req.body;
      const data = await db.book.findAll({
        where: {
          title: {
            [Op.like]: `%${keyword}%`,
          },
        },
      });
      res.render('home/index', { data });
    } catch (e) {
      res.send(e);
    }
  }
}
export default new HomeController();
