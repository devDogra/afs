const express = require('express'); 
const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt'); 
const app = express(); 

mongoose.connect("mongodb://localhost:27017/pratham")

app.get('/package', (req, res) => {
    res.sendFile(__dirname + "/package.json"); 
})


//        /name?full=true

app.get('/name', (req, res) => {
    if (req.query.full) {
        res.send("FirstName LastName")
        return; 
    }
    res.send("FIrstName"); 
})

npx kill-port 3000

app.listen(3000, () => {
    console.log("http://localhost:3000")
})