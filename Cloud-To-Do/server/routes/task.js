const express = require('express');
const { getTasks, addTask, updateTask, deleteTask, toggleComplete } = require('../controllers/taskController');
const { authMiddleware } = require('../middleware/auth');
const router = express.Router();

router.use(authMiddleware);

// CRUD
router.get('/', getTasks);
router.post('/', addTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.put('/:id/complete', toggleComplete);

module.exports = router;
