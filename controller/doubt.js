const Doubt = require("../models/doubt")


module.exports.create = async function(req,res){
  try{
    Doubt.create(
      { title: req.body.title, description: req.body.description,
      status: req.body.status },
      function (doubt) {
        return res.redirect("/student/dashboard");
      }
    );
  }catch(err){
    console.log("Error",err)
  }
}