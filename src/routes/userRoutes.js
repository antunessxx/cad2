const express = require('express');
const { signup, login, getAllUsers } = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();


router.post('/signup', signup);
router.post('/login', login);


router.get('/users', authenticateToken, getAllUsers);

module.exports = router;

