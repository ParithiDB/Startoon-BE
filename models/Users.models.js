const mongoose = require('mongoose');
const {Schema} = mongoose;

const usersSchema = new Schema({
    fullName : {type:String, required:true},
    mail : {type:String, required:true},
    password : {type:String, required:true},
    resetToken : {type:String, upsert:true},
    shortenUrl : {type:Array, upsert:true},
    gender: { type: String, required: true }
})

module.exports = mongoose.model("users",usersSchema);