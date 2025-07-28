const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema({
    goal: {
        type: String,
        required: true
    },

    isDone: {
        type: Boolean,
        default: false
    },
    year: {
        type: Number
    },
    month: {
        type: Number
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('goal', goalSchema)