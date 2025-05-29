const express = require('express');
const { sendReminderEmail } = require('../controllers/notifyController');
const { authMiddleware } = require('../middleware/auth');
const router = express.Router();

router.use(authMiddleware);

router.post('/remind', sendReminderEmail);

module.exports = router;
