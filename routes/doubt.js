const express = require("express")
const router = express.Router();
const passport = require("passport");

const doubtCntlr = require("../controller/doubt")

router.post("/create",passport.checkAuthentication, doubtCntlr.create);

module.exports = router
