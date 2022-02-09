import * as mongoose from 'mongoose';

export interface ITodo extends mongoose.Document {
  text: string;
  index: number;
  completed: boolean;
}

const TodoSchema = new mongoose.Schema({
  text: String,
  index: Number,
  completed: Boolean,
});

module.exports = mongoose.models.Todo || mongoose.model<ITodo>('Todo', TodoSchema);
// const Todo = mongoose.model<ITodo>('Todo', TodoSchema);
// export default Todo;