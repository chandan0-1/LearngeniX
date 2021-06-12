const mongoose = require("mongoose");
const mentorSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    skipeddoubt:{
      type:Number,
    },
    doubt: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doubt",
      },
    ],

  },
  {
    timestamps: true,
  }
);

const Mentor = mongoose.model('Mentor',mentorSchema);

module.exports = Mentor;