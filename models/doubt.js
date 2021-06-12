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

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },

    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
    },
    status:{
      type:String,
      required:true
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
