const express = require('express')
const route = express.Router()
const verifytoken = require('../function/middleware.js')
const { register, login_user, updateProfile } = require('../controllers/userController')

const { get_profile } = require('../controllers/profileController.js')
route.post('/register',register)
route.post('/login', login_user)
route.get('/get', verifytoken, get_profile)
route.patch('/update', verifytoken, updateProfile)


module.exports = route  