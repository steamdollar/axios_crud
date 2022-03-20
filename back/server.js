const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const pool = require('./db.js').pool
const { createToken } = require('./utils/jwt.js')
const { Auth } = require('./utils/auth.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(cors({
    origin:true,
    credentials:true
}))



app.post('/api/user/join',  async (req, res) => {
    const { userid, userpw, name, nickname, birth, gender, phone, mobile} = req.body
    const sql = `INSERT INTO user(userlevel, userid, userpw, name, nickname, birth, gender, phone, mobile) 
                 values (?, ?, ?, ?, ?, ?, ?, ?, ? )`

    const param = [1, userid, userpw, name, nickname, birth, gender, phone, mobile]
    try {
        const result = await pool.execute(sql, param)
        const response = {
            errno : 0
        }
        res.json(response)
    }
    catch (e) {
        console.log(e.message)
        const response = { errno : 1 }
        res.json(response)
    }
})

app.post('/api/user/login', async (req, res) => {
    const { userid, userpw } = req.body
    const sql = `SELECT userid, name, nickname from user where userid =? and userpw = ?`
    const param = [userid, userpw]

    try {
        const [result] = await pool.execute(sql, param)
        
        if (result.length == 0 ) { throw new Error('id/pw 불일치') }

        const jwt = createToken(result[0])
        
        res.cookie('token', jwt, {
            path:'/',
            httpOnly : true,
            domain: 'localhost'
        })
        
        const response = {
            result,
            errno:0
        }

        res.json(response)
    }

    catch (e) {
        console.log(e.message)
        const response = {
            errno : 1
        }
        res.json(response)
    }

})

//

app.post('/api/auth', Auth, (req, res) => {
    if (req.user === undefined) {
        res.send('false')
    }
    else {
        res.send('true')
    }
})

app.listen(4001, ()=> {
    console.log('server run 4001')
})

