
module.exports.home = function (req, res) {
  return res.render("home",{
  title : "Homepage"}
  )};

  module.exports.login = function (req, res) {
  return res.render("login",{
  title : "Login Page"}
  )};

module.exports.register = function (req, res) {
  return res.render("register", {
    title: "Sign up",
  });
};

module.exports.destroySession = function (req, res) {
  req.flash("error", "You have Logged out!");

  req.logout();

  return res.redirect("/");
};