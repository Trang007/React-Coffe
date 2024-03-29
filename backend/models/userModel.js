const mongoose = require('mongoose'); 
var userSchema = new mongoose.Schema({
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