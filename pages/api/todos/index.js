import dbConnect from '../../../lib/dbConnect'
import Todo from '../../../models/Todo'

export default async function handler (req, res) {
  const { method } = req;

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const todos = await Todo.find({});
        res.status(200).json({ data: todos });
      } catch (error) {
        res.status(400).json({ msg: error });
      }
      break
    case 'POST':
      try {
        const todo = await Todo.create(req.body);
        res.status(201).json({ data: todo });
      } catch (error) {
        res.status(400).json({ msg: error });
      }
      break
    default:
      res.status(400).json({ msg: 'Hi there' })
      break
  }
};
