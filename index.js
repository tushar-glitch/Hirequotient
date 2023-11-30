const express = require('express')
const app = express()
require("dotenv").config()
const cors = require('cors')
const PORT = process.env.port || 3001;
const mongoose = require('mongoose')
const user_routes = require('./routes/user_route')
const post_routes = require('./routes/postRoutes')
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://tushar-glitch:${process.env.MongoPass}@cluster0.fjkozqb.mongodb.net/?retryWrites=true&w=majority`)
app.use(express.json())
app.use(cors())
const db = mongoose.connection;
db.on('open', () => {
    console.log('DB connected successfully');
})
app.use('/api/auth/',user_routes)
app.use('/api/profile/',user_routes)
app.use('/api/post/',post_routes)
app.listen(PORT)