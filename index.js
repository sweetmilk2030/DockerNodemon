'use strict'
//https://gist.github.com/ksmithut/e126f7ddb40b760487a17e8b569a77b5

const express = require('express')

const { PORT = '3000' } = process.env
const app = express()

app.use((req, res, next) => {
  res.send('Hello Hung Ha')
})

app.listen(PORT)