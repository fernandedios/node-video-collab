var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
  title: String,
  content: String,
  chat: String
});

module.exports = mongoose.model('Task', taskSchema);
