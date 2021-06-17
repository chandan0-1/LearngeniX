const Doubt = require("../models/doubt");



module.exports.create = async function(req,res){
  req.flash("success", "Doubt Posted Successfully!!");

  try{
    Doubt.create(
      {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        student: req.user._id,
      },
      function (doubt) {
        return res.redirect("/student/dashboard");
      }
    );
  }catch(err){
    console.log("Error",err)
  }
}

