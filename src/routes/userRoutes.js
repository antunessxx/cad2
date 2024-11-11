// routes/userRoutes.js
const express = require('express');
const { signup, login, getAllUsers } = require('../controllers/userController.js');
const authenticateToken = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/users', authenticateToken, getAllUsers); // Rota para listar os usuários

module.exports = router;
