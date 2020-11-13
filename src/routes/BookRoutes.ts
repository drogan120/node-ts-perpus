import BaseRoutes from './BaseRoutes';

// Controllers
import { Book } from '../controllers';

class BookRoutes extends BaseRoutes {
  public routes() {
    this.router.get('/', Book.index);
    this.router.post('/create', Book.create);
    this.router.get('/create', Book.new);
    this.router.get('/show/:id', Book.show);
    this.router.get('/edit/:id', Book.edit);
    this.router.get('/update/:id', Book.update);
    this.router.get('/delete/:id', Book.destroy);
  }
}

export default new BookRoutes().router;
