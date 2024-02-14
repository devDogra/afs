const nodemailer = require('nodemailer'); 
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "devdogra1@gmail.com",
        pass: process.env.PASS,
    }
})

const mail = {
    to: "satyam1291.be21@chitkara.edu.in",
    from: "devdogra1@gmail.com",
    subject: "Hi Satyam",
    text: "Hi hi hi hi"
}
transporter.sendMail(mail); 


