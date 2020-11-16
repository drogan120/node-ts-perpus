import BaseRoutes from './BaseRoutes';

// Controller
import { User } from '../controllers';

class UserRoutes extends BaseRoutes {
  public routes() {
    this.router.get('/', User.index);
    this.router.post('/create', User.create);
    this.router.get('/create', User.new);
    this.router.put('/update/:id', User.update);
    this.router.get('/edit/:id', User.show);
    this.router.delete('/delete/:id', User.destroy);
  }
}

export default new UserRoutes().router;
