let User = require("../models/user");
let Doubt = require("../models/doubt")


module.exports = function (req, res) {
  return res.send("<h1> Hello from Mentor's Homepage!!</h1>");
};

module.exports.dashboard =  function (req, res) {
  // let doubt = await Doubt.find({});
  

  Doubt.find({}).populate("student").exec(
    function(err,doubt){
      return res.render("student_dashboard", {
        title: "Student Dashboard",
        doubt: doubt,
      });
    }

  )
};

module.exports.home = function (req, res) {
  return res.render("student_home", {
    title: "Raise Doubt",
  });
};

module.exports.create = async function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    console.log("wrong Creditionals!");
    return res.redirect("back");
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      User.create(
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          type: req.body.user_type
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


module.exports.contentSwitch = async function(req, res){

  let user = await  User.findOne({email : req.body.email});

  console.log(user)
  if (user && user.type == 'mentor'){
    console.log("Mentor")
    return res.redirect("/mentor/home")
  }
  else{
    return res.redirect("/student/home");
  }
  
}
// module.exports.createSession = function (req, res) {
//   // req.flash("success", "Logged in Successfully!");
//   return res.redirect("/student/home");
// };

// module.exports.destroySession = function (req, res) {
//   req.logout();

//   return res.redirect("/");
// };

