//index.js inside /api combines all api routes and exports one router middleware module
const router = require("express").Router();

const testRoutes = require("./test");
const contactUsMailRoutes = require("./contactUsMail");
const influencerProgramMailRoutes= require("./influencerProgramMail");

router.use(testRoutes);
router.use(contactUsMailRoutes);
router.use(influencerProgramMailRoutes);

module.exports = router;
