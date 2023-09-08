const express = require('express');
const router = express.Router()

// import nodemailer and create transport setup
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "instagram-clone-name@outlook.com",
    pass: "Noahisthebest1!"
  }
})

router.get("/", async (req, res) => {
  try {
    res.json({ "hello": "worlds" });
  } catch (err) {
    res.status(500).send(err)
    console.error(err)
  }
})

router.post("/testing", async (req, res) => {
  try {
    // NOTE: this might end up in spam
    // send the email
    transporter.sendMail({
      // must match same email as transporter
      from: "instagram-clone-name@outlook.com",
      to: req.body.email,
      subject: "This is Net VR!",
      html: `<h1>Welcome To Net VR sir!</h1>
      <br/>
      <br/>
      <p>We hope you enjoy using our platform!</p>
      <br/>
      <p>Sincerely, Net VR Team</p>
      `, // html body
    })

    res.json({ message: "Saved Successfully. Check inbox or spam in your email!" })
  } catch (err) {
    res.status(500).send(err)
    console.error(err)
  }
})

module.exports = router;
