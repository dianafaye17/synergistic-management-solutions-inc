var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var MessageSchema = new Schema({
  to: String,
  from: String,
  text: String
  
});


var Message = Mongoose.model('Message', MessageSchema);

module.exports = Message;