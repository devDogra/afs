const express = require('express'); 
const multer = require('multer'); 
const fs = require('fs'); 
const app = express(); 
const mongoose = require('mongoose'); 
const User = require('./models/User'); 
mongoose.connect('mongodb://localhost:27017/g25-multer');

const storage = multer.diskStorage({
    destination: __dirname + "/uploads",
    filename: function(req, file, cb) {
        if (file.mimetype != 'image/jpeg') {
            cb(new Error("Images must be of type .jpg"))
            return; 
        }
        cb(null, file.originalname);
    }
})

const upload = multer({ storage }); 

app.set('view engine', 'hbs');

app.get('/upload', (req, res) => {
    res.render('upload'); 
})
app.post('/upload', upload.single('img'), async (req, res) => {
    const fie = req.file; 
    
    const { email, password } = req.body; 
    
    const user = new User({
        email, 
        password,
        imgURL: file.path,
    }) 

    //      image/jpeg  -------> [ image, jpeg ]
    const extension = file.mimetype.split('/')[1];
    const newName = user._id + "." + extension; 
    const newPath = file.destination + "/" + newName; 

    user.imgURL = newPath; 

    fs.renameSync(file.path, newPath);

    await user.save()
    res.send("Image uploaded"); 
})




app.listen(3000, () => {
    console.log("http://localhost:3000"); 
})