const multer = require('multer'); 
const express = require('express');

const storage = multer.diskStorage({
    destination: __dirname + "/images",
    filename: function(req, file, cb) {
        if (file.mimetype != 'image/jpeg') {
            cb(new Error("Images must be of the type .jpeg"))
            return; 
        }
        
        cb(null, file.originalname);
    }
})

const app = express(); 

const upload = multer({ 
    storage,
    // onError: function(err, next) {
    //     next(err); 
    // }
 }); 


app.set('view engine', 'hbs'); 

// npm i multer express hbs
app.get('/upload', (req, res) => {
    res.render('upload'); 
})

app.post('/upload', upload.single('img'), (req, res) => {
    // image upload 
    res.send("Image uploaded"); 
})

app.listen(3000, () => {
    console.log("http://localhost:3000"); 
})

