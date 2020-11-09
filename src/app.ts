import express, { Application, Request, Response } from 'express';
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotEnv from 'dotenv'
import expressLayout from 'express-ejs-layouts'

// Routes
import { RouteBook } from './routes'


class App {

    public app: Application;

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
        this.app.use(express.static('public'))
        this.app.use(expressLayout)
        this.app.set('views', __dirname + '/views/')
        this.app.set('view engine', 'ejs')


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