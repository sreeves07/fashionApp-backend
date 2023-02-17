//Dependencies
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dripController = require('./controllers/dripController')
const app = express()

//Middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

//Routes
app.use('/drip', dripController)

app.get('/',(req, res) => {
    res.send('Welcome to your drip collection')
})

app.get('*', (req, res) => {
    res.status(404).send({ error: "Page not found!"})
})

//Export
module.exports = app