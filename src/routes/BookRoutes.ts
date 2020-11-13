import BaseRoutes from './BaseRoutes';

// Controllers
import { Book } from '../controllers';

class BookRoutes extends BaseRoutes {
  public routes() {
    this.router.get('/', Book.index);
    this.router.get('/create', Book.create);
    this.router.get('/show', Book.show);
    this.router.get('/edit/:id', Book.edit);
    this.router.get('/update', Book.update);
    this.router.get('/destroy', Book.destroy);
  }
}

export default new BookRoutes().router;
