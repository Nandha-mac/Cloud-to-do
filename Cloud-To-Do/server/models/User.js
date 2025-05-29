const mongoose = require('mongoose'); // <-- THIS LINE IS REQUIRED

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: String, // Not required for OAuth users
  name: String,
  oauthProvider: String,
  roles: { type: [String], default: ['User'] },
  resetToken: String,
  resetTokenExpiry: Date
});

module.exports = mongoose.model('User', userSchema);
