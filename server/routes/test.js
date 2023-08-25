const express = require('express');
const router = express.Router()

router.get("/", async (req, res) => {
  try {
    res.json({ "hello": "world" });
  } catch (err) {
    res.status(500).send(err)
    console.error(err)
  }
})

router.get("/testing", async (req, res) => {
  try {
    res.json({ "new": "route" });
  } catch (err) {
    res.status(500).send(err)
    console.error(err)
  }
})

module.exports = router;
