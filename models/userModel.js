const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    password: {
        type:String,
        select: false,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    phone: {
        type: String,
        required:true
    },
    address: {
        type:String,
        required:true
    }
})

const user_Model = mongoose.model('users-hire-quotient', user_schema)
module.exports = user_Model