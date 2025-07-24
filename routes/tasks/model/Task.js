const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type: String
    },
    year:{
        type: Number
    },
    month:{
        type: Number
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('task', taskSchema)