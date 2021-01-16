const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  }, 
  address: {
    type: Object
  }
}, { timestamps: true});

module.exports = mongoose.model('User', UserSchema);