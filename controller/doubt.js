const Doubt = require("../models/doubt");
const student = require("./mentor");


module.exports.create = async function(req,res){
  try{
    Doubt.create(
      // {content : req.body.content,
      // student : req.user._id},
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