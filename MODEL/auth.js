const mongoose = require("mongoose");
const { Schema } = mongoose;

const authSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    maxlength: [25, "Name should not exceed 25 characters"],
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required:true,
    minlength:[8, "Password must be at least 8 characters"]
  },
});

const Auth = mongoose.model('Auth', authSchema);
module.exports = Auth;
