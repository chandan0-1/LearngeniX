let Student = require("../models/student")


module.exports = function(req, res){
  return res.send("<h1> Hello from Student's Homepage!!</h1>")
}

module.exports.home = function (req, res) {
  return res.render('student_home',
  title = "Student Name"
  )
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
  return res.render('student_home',{
    user: Student.name,
    title: "Hello"
  });
};

module.exports.destroySession = function (req, res) {
  req.logout();

  return res.redirect("/");
};