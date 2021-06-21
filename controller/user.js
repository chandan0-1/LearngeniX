let User = require("../models/user");
let Doubt = require("../models/doubt")



// Rendering Dashobard of the student
module.exports.dashboard =  function (req, res) {
 
  Doubt.find({}).sort('-createdAt')
  .populate("student")
  .populate("mentor")
  .populate({
    path : 'comments',
    populate:{
      path: 'user'
    }
  })
  .exec(
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

// controller function to create the user in the DB
module.exports.create = async function (req, res) {

  if (req.body.password != req.body.confirm_password) {
  req.flash("error", "Password doesn't match!!");
    return res.redirect("back");
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    // if User is not Present in the DB
    if (!user) {
      User.create(
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          type: req.body.user_type
        },
        function (user) {
          req.flash("success", "User created successfully!!");

          return res.redirect("/login");
        }
      );

      // if user's Email is already in DB
    } else {
        req.flash("error", "Email id is already taken !");
        return res.redirect("back");
    }
  } catch (err) {
    console.log(err, "Internal Server error!!");
  }
};


// Controller function to Switch to the mentor and Student
module.exports.contentSwitch = async function(req, res){
  req.flash("success", "Logged in Successfully!");

  let user = await  User.findOne({email : req.body.email});
  if (user && user.type == 'mentor'){
    return res.redirect("/mentor/home")
  }
  else{
    return res.redirect("/student/home");
  }  
}

