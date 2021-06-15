let Teacher = require("../models/user");
const Doubt =  require("../models/doubt")

module.exports.temp = function (req, res) {
  return res.send("<h1> Hello from mentor's Homepage!!</h1>");
};

module.exports.home = async function (req, res) {
  let doubt = await Doubt.find({}).sort('-createdAt').populate('student');

  if (doubt){
    return res.render("mentor_home", {
      title: "Home",
      doubt
    });

  }

};



module.exports.createSession = function (req, res) {
  // req.flash("success", "Logged in Successfully!");
  return res.redirect("/mentor/home");
};

module.exports.destroySession = function(req,res){
  req.logout();

  return res.redirect("/");
}
module.exports.signUp = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/mentor/home");
  }

  return res.render("register", {
    title: "DoubtIO | Sign Up",
  });
};

// rendering the sign In page
module.exports.signIn = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/mentor/home");
  }

  return res.render("login", {
    title: "DoubtIO | Sign In",
  });
};