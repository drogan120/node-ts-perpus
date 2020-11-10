import express, { Application, Request, Response } from 'express';
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotEnv from 'dotenv'
import path from 'path'
// Routes
import { RouteBook } from './routes'


class App {

    public app;

    constructor() {
        this.app = express()
        this.routes()
        this.plugins()
        dotEnv.config()
    }

    protected plugins() {

        this.app.use(morgan("dev"))
        this.app.use(bodyParser.json())
        this.app.use(cors)
        this.app.use(express.static(path.join(__dirname, 'public')))
        this.app.set('view engine', 'ejs')
        this.app.set('views', path.join(__dirname, 'views'))


    }

    protected routes() {
        this.app.use('/books', RouteBook)
    }

}


const PORT: String = process.env.APP_PORT || '5000';
const app = new App().app;

app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`)
})