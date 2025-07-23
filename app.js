const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const goalRouter = require('./routes/goals/goalRouter')
const habitRouter = require('./routes/habits/habitRouter')
const userRouter = require('./routes/user/userRouter')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(cors())


// app.use('/api/users', userRouter)
app.use('/api/habits', habitRouter)
// app.use('/api/goals', goalRouter)

module.exports = app



