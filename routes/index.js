"use strict"

const express = require('express')
const router = express.Router()

const Controller = require('../controllers/controller')

router.get('/', Controller.home)
router.get('/register', Controller.register)
// router.post('/register', Controller.regPost)








module.exports = router