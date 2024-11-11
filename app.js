// app.js
// app.js
const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes');
const authenticateToken = require('./src/middlewares/authMiddleware.js');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Usar rotas de usuário
app.use('/api', userRoutes);

// Rota protegida
app.get('/api/protected', authenticateToken, (req, res) => {
    res.json({ message: `Olá, ${req.user.username}! Você acessou uma rota protegida.` });
});

// Servir páginas HTML
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

