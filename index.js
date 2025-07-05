const express = require('express')
// import express from 'express'
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello World!' })
}

require('dotenv').config()

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/himanshusen' ,(req, res) => {
    res.send(`<h1>Hello Himanshu Sen! using a ${port} </h1>`)
})


app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})

