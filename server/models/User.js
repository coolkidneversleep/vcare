const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  date: String,
  location: String,
  vaccine: String
});

mongoose.model('users', userSchema);