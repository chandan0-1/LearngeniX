const Doubt = require("../models/doubt");


// controller function for Dashboard
module.exports.dashboard =  function (req, res) {

    Doubt.find({}, function(err,doubt){
      console.log("Hellor",doubt)
      return res.render('student_dashboard',{
        title : "Dashboard",
        doubt 
    });

  })
}

// controller function for Homepage of the student

module.exports.home = function (req, res) {

  req.flash("success", "You have Logged out!");

  return res.render("student_home", {
  title : "Raise Doubt"});
  };

