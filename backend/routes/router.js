const express = require('express')
const router = express.Router()
const path = require('path')
let nodemailer = require('nodemailer')
require('dotenv/config')


router.get('/',(req,res)=>{
    res.send("<h1>Hello Jeevesh Rai ...</h1>")
})

router.post('/contact', async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    let Transport = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_ID,
            pass: process.env.PASS
        }
    });

    Transport.verify((error) => {
        if (error) {
            console.log('ERROR......' + error);
        } else {
            console.log("Ready to Send");
        }
    });

    let mailOption = {
        from:'testmail002007@gmail.com',
        to: 'testmail002007@gmail.com',
        subject: 'Portfolio Website Message',
        text: `
        I am ${name} 
        My Email id is ${email}

        ${message}s
        `
    };
    Transport.sendMail(mailOption, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json('Message Sent..');
        }
    });
})

module.exports = router