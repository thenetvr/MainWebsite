//index.js inside /api combines all api routes and exports one router middleware module
const router = require("express").Router();

const testRoutes = require("./test");

router.use(testRoutes);

module.exports = router;
