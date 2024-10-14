const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
    userName :{
        type :String,
        required : true ,
        unique : true
    },
    email :{
        type :String,
        required : true ,
        unique : true
    },
    password :{
        type :String,
        required : true ,
        
    },
    role :{
        type : String,
        default : 'user'
    }
});

const User = mongoose.model('User', UserShema )

module.exports = User;