const taskModel = require("../models/postModel")
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const user_Model = require("../models/userModel")
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const { name, email, password, phone, address } = req.body;
    const isemail = await user_Model.findOne({
        email: email
    })
    if (isemail) {
        res.status(403).json({
            message: "Account already exist!"
        })
    }
    else {
        const hashedPass = await bcrypt.hash(password, 10)
        user_Model.create({
            name: name,
            email: email,
            password: hashedPass,
            phone: phone,
            address: address
        })
            .then(() => {
                res.status(201).json({
                    message: "OK"
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Error creating account!"
                })
                console.log(err);
            })
    }
}
const login_user = async (req, res) => {
    const { email, password } = req.body;
    const isemail = await user_Model.findOne({
        email: email
    }).select("+password")
    if (isemail) {
        const ispass = await bcrypt.compare(password, isemail.password)
        if (ispass) {
            const token = jwt.sign({ email, password }, process.env.JWT_PRIVATE_KEY)
            res.status(200).json({
                token,
                "message": "OK"
            })
        }
        else {
            res.status(400).json({
                message: "Password incorrect!"
            })
        }
    }
    else {
        res.status(400).json({
            message: "No user found!"
        })
    }
}
// update user profile
const updateProfile = async (req, res) => {
    const { name, email, phone, address } = req.body;
    try {
        user_Model.findOneAndUpdate({ email: email }, {
            name: name,
            email: email,
            phone: phone,
            address: address
        })
            .then(() => {
                res.status(201).json({
                    message: "OK"
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({
                    message: "Error updating profile!"
                })
            })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error updating profile!"
        })
    }
}

module.exports = {
    login_user,
    register,
    updateProfile
}