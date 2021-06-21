const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true
  },

  // comment belong to user
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  
  doubt: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Doubt"
  }
},{
  timestamps:true
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;



