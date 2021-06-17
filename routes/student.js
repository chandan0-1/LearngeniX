const express = require("express");
const router = express.Router();
const passport = require('passport')

const studentCntrlr = require("../controller/user")


router.get("/home", passport.checkAuthentication, studentCntrlr.home);
router.get("/dashboard", passport.checkAuthentication, studentCntrlr.dashboard);

module.exports = router;
