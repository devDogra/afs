const express = require('express'); 
const multer = require('multer'); 
const app = express(); 
app.set('view engine', 'hbs'); 

const storage = multer.diskStorage({
    destination: __dirname + "/images",
    filename: function(req, file, cb) {
        // console.log(file); 
        if (file.mimetype == 'image/png') {
            cb(new Error(".png files not allowed"))
            return;
        }
        cb(null, file.originalname); 
    },
})
const upload = multer({ storage }); 

app.get('/upload', (req, res) => {
    res.render('upload'); 
})
app.post('/upload', upload.single('img'), (req, res) => {
    res.send("Image uploaded"); 
})

app.listen(3000, () => {
    console.log("http://localhost:3000"); 
})