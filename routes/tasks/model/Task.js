const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: null
    },
    status: {
        type: String,
        default: "todo",
        enum: ["todo", "in progress", "on hold", "complete", "stuck"]
    },
    priority: {
        type: String,
        enum: ["high", "medium", "low", null],
        default: null
    },
    flag:{
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
        default: null,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: true
    }
})

module.exports = mongoose.model('task', taskSchema)