import BaseRoutes from './BaseRoutes';

// Controller
import { Home } from '../controllers'

class HomeRoutes extends BaseRoutes {
  public routes() {
    this.router.get('/', Home.index);
    this.router.post('/', Home.search);
    this.router.get('/books/:isbn', Home.bookInfo);
  }
}
export default new HomeRoutes().router;
