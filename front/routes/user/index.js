const express = require('express')
const router = express.Router()
const userController = require('./userController.js')

router.get('/login', userController.login)
router.get('/join', userController.join)

module.exports = router