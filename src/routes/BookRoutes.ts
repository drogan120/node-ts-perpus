import BaseRoutes from './BaseRoutes';

// Controllers
import { Book } from '../controllers';

class BookRoutes extends BaseRoutes {
  public routes() {
    this.router.get('/', Book.index);
    this.router.post('/create', Book.create);
    this.router.get('/create', Book.new);
    this.router.put('/update/:id', Book.update);
    this.router.get('/edit/:id', Book.show);
    this.router.delete('/delete/:id', Book.destroy);
  }
}

export default new BookRoutes().router;
