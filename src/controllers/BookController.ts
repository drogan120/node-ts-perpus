import { Request, Response } from 'express'

import ControllerInterface from './ControllerInterface'

class BookController implements ControllerInterface {
    index(req: Request, res: Response): any {
        return res.render('books/index')
    }
    create(req: Request, res: Response): Response {
        return res.send('create')

    }
    show(req: Request, res: Response): Response {
        return res.send('show')
    }
    update(req: Request, res: Response): Response {
        return res.send('update')
    }
    destroy(req: Request, res: Response): Response {
        return res.send('destroy')
    }
}

export default new BookController()