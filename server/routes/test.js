const express = require('express');
const router = express.Router()

// import path & handlebars for email templating
const fs = require('fs')
const handlebars = require("handlebars")

// import nodemailer and create transport setup
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  // can use gmail service
  host: "smtp.gmail.email",
  secure: false,
  service: 'gmail',
  auth: {
    user: "noreply@thenetvr.com",
    pass: process.env.EMAIL_PASS
  }
})

router.get("/", async (req, res) => {
  try {
    res.json({ 
      "hello": "worlds"});
  } catch (err) {
    res.status(500).send(err)
    console.error(err)
  }
})

router.post("/testing", async (req, res) => {
  try {
    // HTML email template used
    const source = fs.readFileSync('.\\templates\\email_template.html', 'utf-8')
      .toString();
    const template = handlebars.compile(source);

    // specify variables for email template
    const htmlToSend = template({
      username: 'Mike'
    })

    // NOTE: this might end up in spam
    // send the email
    await transporter.sendMail({
      // must match same email as transporter
      from: "noreply@thenetvr.com",
      to: req.body.email,
      subject: "This is Net VR!",
      text: "This is Net VR!",
      // send the template
      html: htmlToSend
    })

    res.json({ message: "Saved Successfully. Check inbox or spam in your email!" })
  } catch (err) {
    res.status(500).send(err)
    console.error(err)
  }
})

module.exports = router;
