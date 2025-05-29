const nodemailer = require('nodemailer');
const User = require('../models/User');
const Task = require('../models/Task');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

exports.sendReminderEmail = async (req, res) => {
  const { taskId } = req.body;
  const task = await Task.findById(taskId).populate('user');
  if (!task) return res.status(404).json({ msg: 'Task not found' });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: task.user.email,
    subject: `Reminder: ${task.title}`,
    html: `<p>Don't forget: <b>${task.title}</b><br>Due: ${task.dueDate || 'No due date'}</p>`
  });

  res.json({ msg: 'Reminder sent' });
};
