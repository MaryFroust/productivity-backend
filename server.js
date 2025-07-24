require('dotenv').config({quiet:true})

const mongoose = require('mongoose')
const app = require('./app')

const port = 3000

mongoose
.connect(process.env.MONGO_DB_ADDRESS)
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Server connected on port: ${port}`)
        console.log('MongoDB Connected!')
    })
})
.catch(e=>{
    console.log(e)
})