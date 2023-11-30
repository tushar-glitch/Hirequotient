const postModel = require("../models/postModel")
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const user_Model = require("../models/userModel")
const jwt = require('jsonwebtoken')

const createPost = async (req, res) => {
    const { title, description } = req.body;
    try {
        if (title && description) {
            postModel.create({
                title: title,
                description: description,
                comments: [[]],
                likes:0
            })
                .then(() => {
                    res.status(201).json({
                        message: "New task created!"
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            res.status(400).json({
                message: "Please enter all the fields!"
            })
        }
    }
    catch {
        res.status(500).json({
            message: "Error creating task!"
        })
    }

}
const increaseLikesCount = async (req, res) => {
    const id = req.params.id;
    try {
        postModel.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true })
            .then(() => {
                res.status(201).json({
                    message: "OK"
                })
            })
            .catch(() => {
                res.status(400).json({
                    message: "Error increasing likes count!"
                })
            })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error increasing likes count!"
        })
    }

}
const createCommentOnPost = async (req, res) => {
    const { comment } = req.body;
    const id = req.params.id;
    try {
        if (comment) {
            let newcomment = [];
            newcomment.push(comment);
            postModel.findByIdAndUpdate(id, { $push: { comments: newcomment } }, { new: true })
                .then(() => {
                    res.status(201).json({
                        message: "New comment created!"
                    })
                })
                .catch(() => {
                    res.status(400).json({
                        message: "Error creating comment!"
                    })
                })
        }
        else {
            res.status(400).json({
                message: "Please enter all the fields!"
            })
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error creating task!"
        })
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.find({})
        res.status(200).json(posts)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error getting all posts!"
        })
    }

}
module.exports = {
    createPost,
    createCommentOnPost,
    getAllPosts,
    increaseLikesCount
}