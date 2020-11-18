import BaseRoutes from './BaseRoutes';

// Controller
import { Home } from '../controllers'

class HomeRoutes extends BaseRoutes {
  public routes() {
    this.router.get('/', Home.index);
    this.router.post('/', Home.search);
  }
}
export default new HomeRoutes().router;
