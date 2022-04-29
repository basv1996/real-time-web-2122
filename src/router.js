//import express
const express = require('express')
const router = express.Router()

//import routes from routes folder
const home = require('./routes/home.js')
const gameScreen = require('./routes/gameScreen.js')

//routes
router
    .get('/', home)
    .get('/gameScreen', gameScreen)

module.exports = router