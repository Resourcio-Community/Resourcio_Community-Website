const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: [6, 'Must be at least 6, got {VALUE}'],
        maxLength: [30, 'Max 30 characters, got {VALUE}']
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [8, 'Must be at least 8, got {VALUE}'],
        maxLength: [20, 'Max 20 characters, got {VALUE}']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)