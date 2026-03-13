const mongoose = require('mongoose');

//Schema
const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        maxLength: 70,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
    }
});

//Model 
const Chat = mongoose.model("Chat",chatSchema);

//export module as MODEL
module.exports = Chat;