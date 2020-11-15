import express, { Application } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config as dotEnv } from 'dotenv';
import path from 'path';
import methodOverride from 'method-override';

// Routes
import { RouteBook, RouteUser } from './routes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.views();
    this.routes();
    this.plugins();
    dotEnv();
  }

  protected views() {
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'ejs');
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(methodOverride((req, _res) => {
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        const { _method } = req.body;
        delete req.body._method;
        return _method;
      }
    }));
  }

  protected plugins() {
    this.app.use(morgan('dev'));
    this.app.use(cors);
  }

  protected routes() {
    this.app.get('/', (_req, res) => {
      res.render('home/index');
    });
    this.app.use('/books', RouteBook);
    this.app.use('/users', RouteUser);
  }
}

const { app } = new App();

const PORT: String = process.env.APP_PORT || '5000';
const URL = process.env.APP_URL;
const baseURL = `${URL}:${PORT}`;

app.locals.baseUrl = baseURL;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Application is running on ${baseURL}`);
});
