const nodemailer = require('nodemailer'); 
require('dotenv').config(); 

// PASS=nikhil

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'devdogra1@gmail.com',
        pass: process.env.PASS
    }
})
const mail = {
    // to: "naveennsonii@gmail.com",
    to: "devdogra1@gmail.com",
    from: "devdogra1@gmail.com",
    subject: "HELLO",
    text: "Hi Naveen"
}
transporter.sendMail(mail); 