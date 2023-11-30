const taskModel = require("../models/postModel")
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const user_Model = require("../models/userModel")
const jwt = require('jsonwebtoken')

const get_profile = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY)
    const userEmail = decoded.email
    const user_data = await user_Model.findOne({ email: userEmail })
    console.log(user_data);
}
module.exports = {
    get_profile
}