import { Router } from 'express'
import RouterInterface from './RouterInterface'

abstract class BaseRoutes implements RouterInterface {

    public router: Router

    constructor() {
        this.router = Router()
        this.routes()
    }

    abstract routes(): void
}

export default BaseRoutes