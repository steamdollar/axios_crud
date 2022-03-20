const express = require('express')
const router = express.Router()
const userRouter = require('./user/index.js')
const boardRouter = require('./board/index.js')
const { Auth } = require('../utils/auth.js')

router.use('/user', userRouter)
router.use('/board', Auth, boardRouter)

module.exports = router