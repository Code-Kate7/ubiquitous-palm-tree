'use strict'

const path = require('path')
const express = require('express')
const app = express()
const mainRouter = require('./mainRoutes.js')
const port = process.env.PORT || 3000

app.use(mainRouter)
app.listen(port)
console.log('Express server running on port 3000')
// Comment
