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
  port: 465,
  secure: false,
  service: 'gmail',
  auth: {
    user: "noreply@thenetvr.com",
    pass: process.env.NOREPLY_EMAIL_PASS
  }
})

router.get("/contactUsMail", async (req, res) => {
  try {
    res.json({ "contactUsMail": "contactUsMail" });
  } catch (err) {
    res.status(500).send(err)
    console.error(err)
  }
})

router.post("/contactUsMail", async (req, res) => {
  source = ""
  try {
    // HTML email template used
    if (process.platform === "darwin") { // darwin == mac os
      // HTML email template used
      source = fs.readFileSync('./templates/email_contact_us_template.html', 'utf-8')
        .toString();
    } else if (process.platform === "win32") { // windows == win32
      source = fs.readFileSync('.\\templates\\email_contact_us_template.html', 'utf-8')
        .toString();
    }
    const template = handlebars.compile(source);

    // specify variables for email template
    const htmlToSend = template({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      message: req.body.message
    })

    // NOTE: this might end up in spam
    // send the email
    await transporter.sendMail({
      // must match same email as transporter
      from: "noreply@thenetvr.com",
      to: "mike@thenetvr.com",
      subject: "New user wishes to contact us!",
      text: "New user wishes to contact us!",
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
