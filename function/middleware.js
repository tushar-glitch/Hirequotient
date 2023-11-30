const auth_Model = require("../models/userModel")
const crypto = require('crypto')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifytoken = (req, res, next) => {
    const bearerheader = req.headers['authorization']
    if (bearerheader !== undefined) {
        const tokenArr = bearerheader.split(' ')
        const token = tokenArr[1]
        const temp = jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, authdata) => {
            if (err) {
                res.status(400).json({
                    message: "Authorisation failed! Please login again to continue."
                })
            }
            else {
                userdata = authdata
                next()
            }
        })
    } else {
        res.status(400).json({
            message: "Authorization unsuccussfull"
        })
        return
    }
}
module.exports = verifytoken