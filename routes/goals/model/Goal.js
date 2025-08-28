const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    startDate: {
        type: Date,
        default: null,
    },
    endDate: {
        type: Date,
        default: null,
    },
    actionPlan: {
        type: String,
        default: null
    },
    obstacles: {
        type: String,
        default: null
    },
    solutions: {
        type: String,
        default: null
    },
    notes: {
        type: String,
        default: null
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    why: {
        type: String,
        default: null,
    }

})

module.exports = mongoose.model('goal', goalSchema)

// isDone: {
//     type: Boolean,
//     default: false
// },
// year: {
//     type: Number
// },
// month: {
//     type: Number
// },