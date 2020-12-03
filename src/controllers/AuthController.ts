import { Request, Response } from 'express';
import Authentication from '../utils/Authentication';

const db = require('../db/models');

class AuthControler {
  index = (req: Request, res: Response) => {
    res.render('auth/login');
  }

  login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
      const user = await db.user.findOne({ where: { fullname: username } });
      if (user) {
        const passCompare = await Authentication.compare(password, user.password);
        if (passCompare) {
          const token = Authentication.generateToken(user.id, username, user.password);
          return res.send(token);
        }
        return res.send({errors : 'auth failed'})
      }
      return res.send({ errors: 'User not found' });
    } catch (err) {
      res.send(err);
    }
  }
}

export default new AuthControler();
