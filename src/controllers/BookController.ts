import { Request, Response } from 'express'

import ControllerInterface from './ControllerInterface'

// Models
const db = require('../db/models')

class BookController implements ControllerInterface {
    index = async (req: Request, res: Response): Promise<any> => {
        const books = await db.book.findAll({
            attributes: ['id', 'title', 'author']
        })
        return res.render('books/index', { books })
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