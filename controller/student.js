let Student = require("../models/student")


module.exports = function(req, res){
  return res.send("<h1> Hello from Mentor's Homepage!!</h1>")
}

module.exports.dashboard = function (req, res) {
  return res.render('student_dashboard',{
  title : "Student Dashboard"
  })
};

module.exports.home = function (req, res) {
  return res.render("student_home", {
  title : "Raise Doubt"});
  };



module.exports.create = async function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    console.log("wrong Creditionals!")
    return res.redirect("back");
  }
  console.log(req.body)
  try{
  let user = await Student.findOne({ email: req.body.email });
    if (!user) {
      
      Student.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password}
        , function (user) {
        return res.redirect("/login");
      });
    } else {
      return res.redirect("back");
    }
  }catch(err){
    console.log(err,"Internal Server error!!")
  }
};


module.exports.createSession = function (req, res) {
  // req.flash("success", "Logged in Successfully!");
  return res.redirect('/student/home')
};

module.exports.destroySession = function (req, res) {
  req.logout();

  return res.redirect("/");
};

module.exports.signUp = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/student/sign-in");
  }

  return res.render("register", {
    title: "DoubtIO | Sign Up",
  });
};

// rendering the sign In page
module.exports.signIn = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/student/home");
  }

  return res.render("login", {
    title: "DoubtIO | Sign In",
  });
};