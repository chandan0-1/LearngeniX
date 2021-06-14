const express = require("express");
const router = express.Router();
const passport = require("passport");

const userCntrlr = require("../controller/user");

// router.get("/mentor/home",  userCntrlr.home);
router.get("/dashboard", passport.checkAuthentication, userCntrlr.dashboard);

// router.get("/sign-up", userCntrlr.signUp);
// router.get("/sign-in", userCntrlr.signIn);

// router.post(
//   "/create-session",
//   passport.authenticate("student", { failureRedirect: "/login" }),
//   userCntrlr.createSession
// );

// router.post("/content-switch", userCntrlr.contentSwitch);
router.post('/create', userCntrlr.create)

router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/login" }),
  userCntrlr.contentSwitch
);
// router.get("/sign-out", userCntrlr.destroySession);

module.exports = router;
