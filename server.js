const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const path = require('path')
const users = require('./routes/userRoute');
const features = require('./routes/featureRoute');
const connectDB = require('./config/connectDB');

const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.send('Hello World');
})

app.use('/api/users', users)
app.use('/api/features', features)

connectDB()

const PORT = 8000
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT)
})