const express = require("express")
const router = express.Router();

const homecntrl = require("../controller/index");


router.use("/student",require("./student"))
router.use("/mentor", require("./mentor"));
router.use("/doubt", require("./doubt"));


router.get("/", homecntrl.home);
router.get("/login",homecntrl.login);
router.get("/register", homecntrl.register);

router.get("/sign-out", homecntrl.destroySession);

module.exports = router
