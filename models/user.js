const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
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
    type: {
      type: String,
      required: true,
    },

    // Below both the field belongs to mentor's Dashboard
    doubt: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doubt",
      },
    ],
    esclateDoubt: [
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

const User = mongoose.model("User", userSchema);

module.exports = User;