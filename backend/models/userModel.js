const mongoose = require('mongoose')

// Created user schema
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    email : {
        type :String,
        unique:true,
        required :true,
    },
    age : {
        type: Number,
    }
}, {timestamps:true})

// Create model
const User = mongoose.model('User', userSchema)
module.exports = User;