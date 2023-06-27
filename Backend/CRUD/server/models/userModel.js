const mongoose = require('mongoose');

const userSchema = new mongoose.userSchema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength: 20
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    }
})


module.exports = mongoose.model("Users", userSchema)