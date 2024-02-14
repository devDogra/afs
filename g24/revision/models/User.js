const mongoose = require('mongoose'); 


const UserSchema = mongoose.Schema({
    email: { type: String, unique: true, required: true,},
    pwd: { type: String, minLength: 2, required: true}
})



const User = mongoose.model("User", UserSchema); 


module.exports = User; 