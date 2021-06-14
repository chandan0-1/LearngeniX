const express = require("express");
const router = express.Router();
const passport = require('passport')

const studentCntrlr = require("../controller/student")


router.get("/home", passport.checkAuthentication, studentCntrlr.home);
router.get("/dashboard", passport.checkAuthentication, studentCntrlr.dashboard);


router.get("/sign-up", studentCntrlr.signUp);
router.get("/sign-in", studentCntrlr.signIn);

router.post(
  "/create-session",
  passport.authenticate("student", { failureRedirect: "/login" }),
  studentCntrlr.createSession
);

router.post("/create", studentCntrlr.create);

router.get("/sign-out", studentCntrlr.destroySession);

module.exports = router;
