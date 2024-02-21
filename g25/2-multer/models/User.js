const mongoose = require('mongoose'); 
const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    imgURL: String,
})

module.exports = mongoose.model("User", UserSchema); 
// npm i mongoose