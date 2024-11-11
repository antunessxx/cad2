// models/userModel.js

// Array em memória para armazenar os usuários
const users = [];

// Função para adicionar um novo usuário
const addUser = (user) => {
    users.push(user);
    return user;
};

// Função para buscar usuário por nome de usuário
const findUserByUsername = (username) => {
    return users.find(user => user.username === username);
};

// Função para buscar usuário por e-mail
const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
};

// Função para listar todos os usuários
const getAllUsers = () => {
    return users.map(user => ({ username: user.username, email: user.email }));
};

module.exports = {
    addUser,
    findUserByUsername,
    findUserByEmail,
    getAllUsers,
};
