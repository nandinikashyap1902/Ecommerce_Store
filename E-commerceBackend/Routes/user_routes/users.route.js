const express = require('express')
const router = express.Router()
const user_controller = require('./users.controllers')
router.post('/signin',user_controller.loginuser)
router.post('/signup',user_controller.Signup)
module.exports=router