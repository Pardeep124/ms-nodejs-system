const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: String,
  avatar: String,
  bio: String
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);