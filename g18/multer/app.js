const express = require('express'); 
const multer = require('multer'); 
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://127.0.0.1:27017/g18multer')
const User = require('./models/User'); 
const fs = require('fs'); 
const app = express(); 
app.set('view engine', 'hbs'); 

app.use('/images', express.static('./images'))

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
app.post('/upload', upload.single('img'), async (req, res) => {
    const { email, password } = req.body; 

   

    //           /images/a.png
    //  rename ---> b.png
    //           /images/b.png
    
    const user = new User({
        email, 
        password,
        imgURL: req.file.path
    })

    // 'image/png' ----split(/) =====> [ 'image', 'png' ]
    const destination = req.file.destination; 
    const imgname = user._id
    const extension = req.file.mimetype.split('/')[1];

    // /images/id.extension
    const newPath = destination + "/" + imgname + "." + extension;
    user.imgURL = newPath; 
    fs.renameSync(req.file.path, newPath)
    
    await user.save()
    res.send("Image uploaded"); 
})



app.listen(3000, () => {
    console.log("http://localhost:3000"); 
})