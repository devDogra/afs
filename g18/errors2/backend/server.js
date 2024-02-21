const express = require('express'); 
const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt'); 

mongoose.connect('mongodb://localhost:27017/naman')

const app = express(); 

app.get('/package', (req, res) => {
    res.sendFile(__dirname + '/package.json'); 
})

app.listen(3000, () => {
    console.log("http://localhost:3000"); 
})