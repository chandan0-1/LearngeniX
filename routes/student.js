const express = require("express");
const router = express.Router();

const studentCntrlr = require("../controller/student")

router.get("/home", studentCntrlr.home);

module.exports = router;
