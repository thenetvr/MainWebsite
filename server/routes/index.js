//index.js inside /api combines all api routes and exports one router middleware module
const router = require("express").Router();

const testRoutes = require("./test");
const contactUsMailRoutes = require("./contactUsMail");
const influencerProgramMailRoutes= require("./influencerProgramMail");

router.use(testRoutes);
router.use(contactUsMailRoutes);
router.use(influencerProgramMailRoutes);

module.exports = router;

// if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'development') {
//     app.use(express.static('client/build'));
//     app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
//     });
//    }