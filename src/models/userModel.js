
const users = [];


const addUser = (user) => {
    users.push(user);
    return user;
};


const findUserByUsername = (username) => {
    return users.find(user => user.username === username);
};

const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
};


const getAllUsers = () => {
    return users.map(user => ({ username: user.username, email: user.email }));
};

module.exports = {
    addUser,
    findUserByUsername,
    findUserByEmail,
    getAllUsers,
};
