const dotenv = require('dotenv-safe')
const express = require('express')
const { urlencoded } = require('body-parser')

dotenv.config()

const app = express()
const BASE_URL = '/api/dialer/v1'

app.use(urlencoded({ extended: false }))

app.use(`${BASE_URL}/auth`, require('./auth/routes'))
app.use(`${BASE_URL}/voice`, require('./voice/routes'))

app.get(`${BASE_URL}/`, (req, res) => res.send({ ping: 'ok', route: req.url }))
app.get('/', (req, res) => res.send({ ping: 'ok', route: req.url }))

module.exports = app