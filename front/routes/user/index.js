const express = require('express')
const router = express.Router()
const boardController = require('./boardController.js')

router.get('/login', boardController.login)
router.get('/join', boardController.join)

module.exports = router