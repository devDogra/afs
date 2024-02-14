const express = require('express'); 
const router = express.Router(); 

router.get('/abc', (req, res) => {
    res.render('register'); 
})

router.post('/', async (req, res) => {
    const data = req.body; 
    const user = new User(data);
    try {
        await user.save();
        res.send("Registration successful"); 
    } catch(err) {
        res.send("Could not register account");
    }
})




module.exports = router; 