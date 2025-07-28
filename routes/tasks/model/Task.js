const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    isDone:{
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default : Date.now
    },


    // year:{
    //     type: Number
    // },
    // month:{
    //     type: Number
    // },


    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('task', taskSchema)