import dbConnect from '../../lib/dbConnect'
import Todo from '../../models/Todo'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const todos = await Todo.find({});
        console.log(todos);
        res.status(200).json({ success: true, data: todos })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const todo = await Todo.create(req.body)
        res.status(201).json({ success: true, data: todo })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'PATCH':
      try {
        const todo = await Todo.update(req.body)
        res.status(200).json({ success: true, data: todo })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
};
