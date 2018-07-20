var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  timestamp: {
      type: Date, 
      default: Date.now
  }
});

module.exports = mongoose.model('Chat', chatSchema);
