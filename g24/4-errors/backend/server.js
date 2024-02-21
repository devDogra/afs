const express = require('express'); 
const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt'); 
const app = express(); 

//    /name?full=true
app.get('/name', (req, res) => {
    if (req.query.full) {
        res.send("FirstName LastName");
        return;
    }
    res.send("FirstName"); 
})

app.get('/package', (req, res) => {
    res.sendFile(__dirname + '/package.json')
})

app.listen(3000, () => {
    console.log("http://localhost:3000"); 
})