const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ $or: [{ user: req.user.userId }, { sharedWith: req.user.userId }] });
  res.json(tasks);
};

exports.addTask = async (req, res) => {
  const { title, description, category, tags, priority, dueDate } = req.body;
  const task = new Task({
    user: req.user.userId,
    title,
    description,
    category,
    tags,
    priority,
    dueDate
  });
  await task.save();
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, $or: [{ user: req.user.userId }, { sharedWith: req.user.userId }] },
    req.body,
    { new: true }
  );
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.user.userId });
  res.json({ msg: 'Task deleted' });
};

exports.toggleComplete = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, $or: [{ user: req.user.userId }, { sharedWith: req.user.userId }] });
  if (!task) return res.status(404).json({ msg: 'Task not found' });
  task.completed = !task.completed;
  await task.save();
  res.json(task);
};
