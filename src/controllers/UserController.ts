import { Request, Response } from 'express';

import ControllerInterface from './ControllerInterface';

// Models
const db = require('../db/models');

class UserController implements ControllerInterface {
  index = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await db.user.findAll({ attributes: ['id', 'fullname', 'uid', 'photo', 'address', 'phone'] });
      res.render('users/index', { users });
    } catch (e) {
      res.send(e);
    }
  }

  show = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const user = await db.user.findOne({ where: { id }, attributes: ['uid', 'fullname', 'email', 'phone', 'address'] });
      res.render('users/profile', { user });
    } catch (e) {
      res.send(e);
    }
  }

  new = (_req: Request, res: Response): void => {
    try {
      res.render('users/new');
    } catch (e) {
      res.send(e);
    }
  }

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        fullname,
        email,
        password,
        vpassword,
      } = req.body;
      if (password === vpassword) {
        const data = { fullname, email, password };
        await db.user.create(data);
        res.redirect('/admin/users');
      }
      res.send('please check your password ');
    } catch (e) {
      res.send(e);
    }
  }

  update = async (req: Request, res: Response): Promise<void> => {
    await res.send('oke');
  }

  destroy = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      await db.user.destroy({ where: { id } });
      res.redirect('/admin/users');
    } catch (e) {
      res.send(e);
    }
  }
}
export default new UserController();
