import express from 'express'
import path from 'path'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', function (req, res) {
    res.render('books/index')
})
app.listen(5000, function () {
    console.log(`application is running`)
})

