const Task = require('../models/Task');
const User = require('../models/User');

// Share a task with another user
exports.shareTask = async (req, res) => {
  const { taskId } = req.params;
  const { email } = req.body;
  const userToShare = await User.findOne({ email });
  if (!userToShare) return res.status(404).json({ msg: 'User not found' });

  const task = await Task.findById(taskId);
  if (!task) return res.status(404).json({ msg: 'Task not found' });

  if (!task.sharedWith.includes(userToShare._id)) {
    task.sharedWith.push(userToShare._id);
    await task.save();
  }
  res.json({ msg: `Task shared with ${email}` });
};

// Get tasks shared with this user
exports.getSharedTasks = async (req, res) => {
  const tasks = await Task.find({ sharedWith: req.user.userId });
  res.json(tasks);
};

// Set role (stub for role-based control, expand as needed)
exports.setRole = async (req, res) => {
  // Implement per-task or per-user roles as needed
  res.json({ msg: 'Role set (not implemented, use User.roles for now)' });
};
