// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401); // Token não fornecido

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Token inválido
        req.user = user; // Adiciona o usuário decodificado à requisição
        next(); // Passa para a próxima middleware ou rota
    });
};

module.exports = authenticateToken;
