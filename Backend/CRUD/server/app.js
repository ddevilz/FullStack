require("dotenv").config()
const express = require("express");
const app = express()
const cors = require('cors')
const connectToDb = require('./config/db')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

connectToDb()

const userRoutes = require("./routes/userRoutes");

app.use("/", userRoutes);

module.exports = app