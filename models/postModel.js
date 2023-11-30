const mongoose = require('mongoose')

const post_schema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    comments: [{
        type: Array                 // I have given its type as an Array as we can further implement the nested comment feature here by simply creating ids for every comments and then pushing their replies in their respective comments.
    }],
    likes: {
        type: Number,
        required: true
    }
})

const postModel = mongoose.model('posts', post_schema)
module.exports = postModel