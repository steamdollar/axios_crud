const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

const router = require('./routes/index.js')


app.set('view engine', 'html')
nunjucks.configure('views', {express:app})

app.get('/', (req, res) => {
    res.render('main.html')
})

app.use(router)

app.listen(3001, ()=> {
    console.log('server run 3001')
})