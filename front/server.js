const express = require('express')
const nunjucks = require('nunjucks')
const app = express()


app.set('view engine', 'html')
nunjucks.configure('views', {express:app})

app.get('/', (req, res) => {
    res.render('main.html')
})

app.get('/user/join', (req, res) => {
    res.render('join.html')
})

app.get('/user/login', (req, res) => {
    res.render('login.html')
})

app.listen(3001, ()=> {
    console.log('server run 3001')
})