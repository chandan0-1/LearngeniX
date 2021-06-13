const express = require("express");
const router = express.Router();
const passport = require('passport')

const teacherCntrlr = require("../controller/teacher");

router.get("/home", teacherCntrlr.home);
router.post("/create", teacherCntrlr.create);
router.post(
  "/create-session",
  passport.authenticate("mentor", { failureRedirect: "/login" }),
  teacherCntrlr.createSession
);

router.get("/sign-out", teacherCntrlr.destroySession);

module.exports = router;
