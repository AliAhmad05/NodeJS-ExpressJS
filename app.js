const express = require('express')
const { getPosts } = require('./routes/post')
//const postRoutes = require('./routes/post')
const morgan = require('morgan')

const app = express()

//middleware
const myOwnMiddleWare = (req, res, next) => {
  console.log('middleware applied!!')
  next()
}

app.use(morgan('dev'))
app.use(myOwnMiddleWare)

app.get('/', getPosts)

const port = 8080

app.listen(port, () => {
  console.log(`A Node JS API is listening on port: ${port}`)
})