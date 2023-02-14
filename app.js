const express = require('express')
//const { getPosts } = require('./routes/post')
const postRoutes = require('./routes/post')
const morgan = require('morgan') //middleware
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()
dotenv.config()

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => console.log('DB Connected'))
mongoose.connection.on('error', (err) => {
  console.log(`DB connection error: ${err.message}`)
})

//middleware
const myOwnMiddleWare = (req, res, next) => {
  console.log('Middleware Applied!! by Ali')
  next()
}

app.use(morgan('dev'))
app.use(myOwnMiddleWare)

app.use('/', postRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`A Node JS API is listening on port: ${port}`)
})
