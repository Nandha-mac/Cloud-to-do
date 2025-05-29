const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  description: String,
  category: String,
  tags: [String],
  priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Low' },
  completed: { type: Boolean, default: false },
  dueDate: Date,
  sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  reminders: [{ type: Date }]
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
