const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
  },
  date: {
    type: Date,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
