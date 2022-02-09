import dbConnect from '../../../lib/dbConnect'
import Todo from '../../../models/Todo'

export default async function handler (req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'PATCH':
      try {
        const _id = req.query.id;
        await Todo.updateOne(
          { _id }, { $set: { completed: req.body.completed } }
        );
        res.status(200).json({ data: 'ok' });
      } catch (error) {
        console.log('api err: ', error);
        res.status(400).json({ msg: error })
      }
      break
    case 'DELETE':
      try {
        await Todo.deleteOne({ _id: req.query.id });
        res.status(200).json({ data: 'ok' });
      } catch (error) {
        res.status(400).json({ msg: error })
      }
      break
    default:
      res.status(400).json({ msg: 'Hi there' })
      break
  }
};
