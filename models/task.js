var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = Schema({
  title: String,
  content: String,
  chat: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Task', taskSchema);
