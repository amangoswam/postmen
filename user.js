const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: String,
  Lastname: String,
  email: { type: String },
  password: String,
  mobile: Number,
});
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
