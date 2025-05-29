const express = require('express');
const { shareTask, getSharedTasks, setRole } = require('../controllers/shareController');
const { authMiddleware } = require('../middleware/auth');
const router = express.Router();

router.use(authMiddleware);

router.post('/:taskId', shareTask);
router.get('/', getSharedTasks);
router.post('/:taskId/role', setRole);

module.exports = router;
