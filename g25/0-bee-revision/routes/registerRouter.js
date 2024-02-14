const express = require('express'); 
const router = express.Router(); 



router.get('/', (req, res) => {
    res.render('register'); 
})
router.post('/', async (req, res) => {
    const data = req.body; 
    const user = new User(data); 
    try {
        await user.save(); 
        res.send("Account registered"); 
    } catch(err) {
        res.status(400).send("COuldn't register"); 
    }
    

})



module.exports = router; 