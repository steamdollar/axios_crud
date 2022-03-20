const express = require('express')
const router = express.Router()
const app = express()
const boardController = require('./boardController.js')

router.get('/list', boardController.list)
router.get('/view', boardController.view)
router.get('/write', boardController.write)
router.get('/modify', boardController.modify)

module.exports = router