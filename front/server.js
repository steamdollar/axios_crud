const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const cookieParser = require('cookie-parser')
const router = require('./routes/index.js')

// app.use(express.urlencoded({express:true}))
app.use(cookieParser())

app.set('view engine', 'html')
nunjucks.configure('views', {express:app})

app.get('/', (req, res) => {
    const { token } = req.cookies
    if(token) {
        res.render('main2.html')
    }
    else {
        res.render('main.html')
    }
})

app.use(router)

app.listen(3001, ()=> {
    console.log('server run 3001')
})