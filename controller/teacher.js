let Teacher = require("../models/mentor");

module.exports = function (req, res) {
  return res.send("<h1> Hello from Student's Homepage!!</h1>");
};

module.exports.home = function (req, res) {
  return res.render("mentor_home", {
    user: Teacher.name,
    title: "Hello",
  });
};

module.exports.create = async function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    console.log("wrong Creditionals!");
    return res.redirect("back");
  }
  console.log(req.body);
  try {
    let user = await Teacher.findOne({ email: req.body.email });
    if (!user) {
      Teacher.create(
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
        function (user) {
          return res.redirect("/login");
        }
      );
    } else {
      return res.redirect("back");
    }
  } catch (err) {
    console.log(err, "Internal Server error!!");
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