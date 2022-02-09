import * as mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  text: String,
  index: Number,
  completed: Boolean,
});

module.exports = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
