const express = require("express");
const router = express.Router();
const passport = require('passport')


const mentorCntrlr = require("../controller/mentor");

// All get request
router.get("/home", passport.checkAuthentication, mentorCntrlr.home);
router.get("/dashboard", passport.checkAuthentication, mentorCntrlr.dashboard);
router.get("/active-doubts/:id", passport.checkAuthentication, mentorCntrlr.activeDoubts);
router.get("/escalate", passport.checkAuthentication, mentorCntrlr.esclateDoubt);
router.get(
  "/active-doubts-dummy",
  passport.checkAuthentication,
  mentorCntrlr.activeDoubtsDummy
  );

// All Post request is going below
router.post(
    "/create-ans",
    passport.checkAuthentication,
    mentorCntrlr.createAns
  );

router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/login" }),
  mentorCntrlr.createSession
);
  


module.exports = router;
