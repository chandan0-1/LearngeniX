const express = require("express");
const router = express.Router();
const passport = require('passport')
const studentCntrlr = require("../controller/student")

router.get("/home", studentCntrlr.home);
router.get("/dashboard", studentCntrlr.dashboard)

router.post(
  "/create-session",
  passport.authenticate("student", { failureRedirect: "/login" }),
  studentCntrlr.createSession
);

router.post("/create", studentCntrlr.create);

router.get("/sign-out", studentCntrlr.destroySession);

module.exports = router;
