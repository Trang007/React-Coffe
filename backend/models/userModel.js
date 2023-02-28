const mongoose = require('mongoose');
var userSchema = new mongoose.Schema(
    {
        user_email: {
            type: String,
        },
        user_name: {
            type: String,
            required: true,
        },
        user_password: {
            type: String,
            required: true,
        },
        user_role: {
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