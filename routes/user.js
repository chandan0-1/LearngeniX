const express = require("express");
const router = express.Router();
const passport = require("passport");

const userCntrlr = require("../controller/user");

// router.get("/mentor/home",  userCntrlr.home);
router.get("/dashboard", passport.checkAuthentication, userCntrlr.dashboard);

router.post('/create', userCntrlr.create)

router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/login" }),
  userCntrlr.contentSwitch
);


module.exports = router;
