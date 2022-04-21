"use strict"

const Controller = require('../controllers/controller')
const regisController = require('../controllers/regisController')
const router = require('express').Router()
const loginController = require('../controllers/loginController')

router.get('/', Controller.home)
router.get('/register', regisController.regisForm)
router.post('/register', regisController.postRegister)
router.get('/login', loginController.loginForm)
router.post('/login', loginController.postLogin)

module.exports = router