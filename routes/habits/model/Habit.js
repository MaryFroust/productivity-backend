const mongoose = require('mongoose')

const habitSchema = new mongoose.Schema({
    name:{
        type: String
    },
    year:{
        type: Number
    },
    month:{
        type: Number
    },
    daysCompleted:{
        type: [Number],
        default: []
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('habit', habitSchema)