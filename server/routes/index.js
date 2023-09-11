//index.js inside /api combines all api routes and exports one router middleware module
const router = require("express").Router();

const testRoutes = require("./test");
const contactUsMailRoutes = require("./contactUsMail");

router.use(testRoutes);
router.use(contactUsMailRoutes);

module.exports = router;
