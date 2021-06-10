const express = require("express");
const router = express.Router();

const teacherCntrlr = require("../controller/teaching_assistant");

router.get("/home", teacherCntrlr.home);

module.exports = router;
