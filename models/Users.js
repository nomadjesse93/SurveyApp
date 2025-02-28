const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first_Name: {
    type: String,
    required: true
  },
  last_Name:{
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('User', UserSchema);
