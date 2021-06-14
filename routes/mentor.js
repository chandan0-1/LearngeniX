const express = require("express");
const router = express.Router();
const passport = require('passport')


const teacherCntrlr = require("../controller/mentor");

router.get("/home", teacherCntrlr.home);
router.get("/temp", passport.checkAuthentication, teacherCntrlr.temp);



router.get("/sign-up", teacherCntrlr.signUp);
router.get("/sign-in", teacherCntrlr.signIn);

router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/login" }),
  teacherCntrlr.createSession
);
  
router.post("/create", teacherCntrlr.create);
  
router.get("/sign-out", teacherCntrlr.destroySession);

module.exports = router;
