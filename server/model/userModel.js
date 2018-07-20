var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  profilePic: {
    type: String,
    default: `picture-${Math.floor(Math.random() * 20)}`
  }
});

module.exports = mongoose.model('User', userSchema);
