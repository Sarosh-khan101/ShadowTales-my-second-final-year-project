const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
    email: {
    type: String,
    required: true,
    unique: true
  },
    password: {
    type: String,
    required: true,
    unique: true
  },
    phonenumber: {
    type: String,
    required: true,
    unique: true
  },
    age: {
    type: Number,
    required: true
  },
    city: {
    type: String,
    required: true
  },
});

const Signup = mongoose.model("Signup", userSchema);

module.exports = Signup;