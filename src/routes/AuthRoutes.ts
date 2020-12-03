import validate from '../middlewares/AuthValidator';
import { Auth } from '../controllers';
import BaseRoute from './BaseRoutes';

class AuthRoutes extends BaseRoute {
  routes(): void {
    this.router.post('/', validate, Auth.login);
    this.router.get('/', Auth.index);
  }
}

export default new AuthRoutes().router;
