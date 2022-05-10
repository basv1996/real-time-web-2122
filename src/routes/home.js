const express = require('express')
const router = express.Router()

router
.get('/', (req, res) => {
    res.render('home')
})
.get('/gameScreen', (req, res) => {
    res.render('gameScreen')
})

module.exports = router