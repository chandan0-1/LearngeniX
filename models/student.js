const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
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

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;