const mongoose = require('mongoose'); 

const UserSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    pwd: { type: String, required: true, minLength: 2}
})

const User = mongoose.model("User", UserSchema); 

module.exports = User; 