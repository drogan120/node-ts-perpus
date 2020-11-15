import { Request, Response } from 'express';

import ControllerInterface from './ControllerInterface';

class UserController implements ControllerInterface {
  index = async (req: Request, res: Response): Promise<void> => {
    await res.send('oke');
  }

  create = async (req: Request, res: Response): Promise<void> => {
    await res.send('oke');
  }

  show = async (req: Request, res: Response): Promise<void> => {
    await res.send('oke');
  }

  update = async (req: Request, res: Response): Promise<void> => {
    await res.send('oke');
  }

  destroy = async (req: Request, res: Response): Promise<void> => {
    await res.send('oke');
  }
}
export default new UserController();
