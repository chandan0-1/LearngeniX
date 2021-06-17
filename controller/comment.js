const Comment = require("../models/comment")
const Doubt = require("../models/doubt");


module.exports.create = async function(req,res){
    req.flash("error", "Comment Posted !!");


  try{
    let doubt = await  Doubt.findById(req.body.doubtID);

    console.log(doubt)
    if (doubt){
      Comment.create({
        content : req.body.content,
        user : req.user._id,
        doubt : req.body.doubtID
      }, function(err, comment){
        doubt.comments.push(comment)
        doubt.save();
        res.redirect('/student/dashboard')
      })
    }
  }catch(err){
    return res.status(501).json({
      message: "Internal Server Error"
    })
  }
}