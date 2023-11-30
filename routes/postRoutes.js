const express = require('express')
const {createPost, createCommentOnPost, getAllPosts, increaseLikesCount}= require('../controllers/postController')
const verifytoken = require('../function/middleware.js')
const route = express.Router()


route.post('/create', verifytoken, createPost)
route.post('/comment/:id', verifytoken, createCommentOnPost)
route.get('/getall', verifytoken, getAllPosts)
route.post('/like/:id', verifytoken, increaseLikesCount)

module.exports = route