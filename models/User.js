const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "A user must have a name"]
  },
  email: {
    type: String,
    required: [true, "A user must have a email"]
  },
  password: {
    type: String,
    required: [true, "A user must have a password"]
  },
  userType: {
    type: String,
    required: [true, "A user must have a user type"],
    default: "student",
    trim: true
  },
  department: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  yearOfJoining: {
    type: Number
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;