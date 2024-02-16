const express = require('express'); 
const multer = require('multer'); 
const fs = require('fs'); 
const app = express(); 

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
app.post('/upload', upload.single('img'), (req, res) => {
    const file = req.file; 
    console.log(file); 
    
    const newName = req.body.newName; 
    //  'image/jpeg' ---split----> [ 'image', 'jpeg' ]
    const extension = file.mimetype.split('/')[1]
    const newPath = 
        file.destination + "/" + newName + "." + extension
    fs.renameSync(file.path, newPath)

    res.send("Image uploaded"); 
})




app.listen(3000, () => {
    console.log("http://localhost:3000"); 
})