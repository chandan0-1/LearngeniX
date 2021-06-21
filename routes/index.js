const express = require("express")
const router = express.Router();

const homecntrl = require("../controller/index");


// Redirecting the Routes to the respective Field
router.use("/student",require("./student"))
router.use("/mentor", require("./mentor"));
router.use("/doubt", require("./doubt"));
router.use("/user", require("./user"));
router.use("/comment", require("./comment"));



// Rendering the basic Components
router.get("/", homecntrl.home);
router.get("/login",homecntrl.login);
router.get("/register", homecntrl.register);
router.get("/sign-out", homecntrl.destroySession);


module.exports = router
