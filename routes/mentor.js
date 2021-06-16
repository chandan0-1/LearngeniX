const express = require("express");
const router = express.Router();
const passport = require('passport')


const mentorCntrlr = require("../controller/mentor");

router.get("/home", passport.checkAuthentication, mentorCntrlr.home);
router.get("/dashboard", passport.checkAuthentication, mentorCntrlr.dashboard);
router.get("/active-doubts/:id", passport.checkAuthentication, mentorCntrlr.activeDoubts);
router.get(
  "/active-doubts-dummy",
  passport.checkAuthentication,
  mentorCntrlr.activeDoubtsDummy
);



router.get("/sign-up", mentorCntrlr.signUp);
router.get("/sign-in", mentorCntrlr.signIn);

router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/login" }),
  mentorCntrlr.createSession
);
  
router.post("/create-ans", mentorCntrlr.createAns);
  
// router.get("/sign-out", mentorCntrlr.destroySession);

module.exports = router;
