const mongoose = require('mongoose'); 
var userSchema = new mongoose.Schema({
    email:{
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }, 
    role:{
        type:String,
    },
    cart:{
        type: Array,
        default: [],
    }
});

module.exports = mongoose.model('User', userSchema);