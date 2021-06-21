const mongoose = require("mongoose");
const doubtScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    // Storing Who created the doubt
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // Storing who resolved the doubt
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status:{
      type:String,
      required:true
    },
    answer :{
      type: String
    },

    // Include the array of ids of all comments in the doubt schema itself
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Doubt = mongoose.model("Doubt", doubtScheme);
module.exports = Doubt;
