const mongoose = require('mongoose')

const habitSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
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
        ref: 'user',
        required: true
    }
})

module.exports = mongoose.model('habit', habitSchema)