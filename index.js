const express = require('express')
// import express from 'express'

require('dotenv').config()

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const mydata = {
  name: 'Himanshu Sen',
  age: 25,
  city: 'Delhi',
  country: 'India',
  github: 'https://github.com/Himanshu9192s'

}

// app.get('/mydata01', (req, res) => {
//   res.send(mydata)
// })

app.get('/mydata02', (req, res) => {
  res.json(mydata)
})

app.get('/new', (req, res) => {
  res.send(`This is a new route. My data: ${JSON.stringify(mydata)}`)
})


app.get('/himanshusen' ,(req, res) => {
    res.send(`<h1>Hello Himanshu Sen! using a ${port} </h1>`)
})


app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})

