const express = require("express");
const router = express.Router();
const passport = require("passport");

// users controller 
const userCntrlr = require("../controller/user");

// Rendering student Dashboard
router.get("/dashboard", passport.checkAuthentication, userCntrlr.dashboard);

// Creating the doubt
router.post('/create', userCntrlr.create)

router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/login" }),
  userCntrlr.contentSwitch
);


module.exports = router;
