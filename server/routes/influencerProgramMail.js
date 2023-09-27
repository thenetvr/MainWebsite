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

router.get("/influencerProgramMail", async (req, res) => {
  try {
    res.json({ "contactUsMail": "contactUsMail" });
  } catch (err) {
    res.status(500).send(err)
    console.error(err)
  }
})

router.post("/influencerProgramMail", async (req, res) => {
  source = ""
  try {
    if (process.platform === "win32") { // windows == win32
      source = fs.readFileSync('.\\templates\\email_influencer_program_template.html', 'utf-8')
        .toString();
    }
    else { // darwin == mac os
      // HTML email template used
      source = fs.readFileSync('./templates/email_influencer_program_template.html', 'utf-8')
        .toString();
    } 
    const template = handlebars.compile(source);

    // specify variables for email template
    const htmlToSend = template({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      platformUsername: req.body.platformUsername,
      primaryCategoryOfContent: req.body.primaryCategoryOfContent,
      totalFollowers: req.body.totalFollowers,
      streamingChannel: req.body.streamingChannel,
      twitter: req.body.twitter
    })

    // NOTE: this might end up in spam
    // send the email
    await transporter.sendMail({
      // must match same email as transporter
      from: "noreply@thenetvr.com",
      to: "mike@thenetvr.com",
      subject: "New user wishes to join the influencer program!",
      text: "New user wishes to join the influencer program!",
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
