const mongoose = require('mongoose');
var userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "0",
        },
        cart: {
            type: Array,
            default: [],
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);