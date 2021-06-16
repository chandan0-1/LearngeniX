let Teacher = require("../models/user");
const Doubt = require("../models/doubt");

module.exports.activeDoubtsDummy = function (req, res) {
  return res.render("mentor_active_doubts",{
  title: "Active Doubts"});
};

module.exports.home = async function (req, res) {
  let doubt = await Doubt.find({}).sort("-createdAt").populate("student");
  if (doubt) {
    return res.render("mentor_home", {
      title: "Home",
      doubt,
    });
  }
};

// -------------Rendering the Dashboard Section of mentor----------
module.exports.dashboard = function (req, res) {
  if (req.isAuthenticated()) {
    return res.render("mentor_dashboard", {
      title: "Mentor Dashboard",
    });
  }
};


// -------------Rendering the Dashboard Section of mentor----------
module.exports.activeDoubts = function(req,res){

  Doubt.findById(req.params.id)
  .populate("student")
  .populate({
    path : 'comments',
    populate:{
      path: 'user'
    }
  })
  .exec(
    function(err,doubt){
      return res.render("active_doubts", {
        title: "Active Doubts",
        doubt: doubt,
      });
    }
  )
}

module.exports.createAns = async function(req, res){
  try{
  let doubt = await Doubt.findByIdAndUpdate(req.body.doubtID, {
    answer: req.body.content,
    status: "resolved",
    mentor: req.user.id
  });
  if (doubt){
    return res.redirect("/mentor/home");
  }
}catch(err){
  return res.json({
    status : 501,
    message : "Internal Server Error"
  })
}
}

module.exports.createSession = function (req, res) {
  // req.flash("success", "Logged in Successfully!");
  return res.redirect("/mentor/home");
};

module.exports.destroySession = function (req, res) {
  req.logout();

  return res.redirect("/");
};
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
