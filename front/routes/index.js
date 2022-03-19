const express = require('express')
const router = express.Router()
const userRouter = require('./user/index.js')

router.use('/user', userRouter)

module.exports = router