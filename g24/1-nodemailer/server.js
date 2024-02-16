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
    to: "nischay0960.be21@chitkara.edu.in",
    subject: "This is my subject",
    from: "devdogra1@gmail.com",
    text: "Hi Nischay"
}
transporter.sendMail(mail); 
