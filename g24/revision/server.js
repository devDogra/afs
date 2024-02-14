const express = require('express'); 
const mongoose = require('mongoose'); 
const User = require('./models/User'); 
const registerRouter = require('./routes/registerRouter'); 

mongoose.connect('mongodb://127.0.0.1:27017/revg24');

const app = express(); 
app.set('view engine', 'hbs'); 
app.set('views', './views')

app.use(express.urlencoded()); 
app.use(express.json()); 
app.use('/register', registerRouter); 



app.listen(3000, () => console.log("http://localhost:3000"));



