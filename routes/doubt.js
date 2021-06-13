const express = require("express")
const router = express.Router();

const doubtCntlr = require("../controller/doubt")

router.post("/create", doubtCntlr.create);

module.exports = router
