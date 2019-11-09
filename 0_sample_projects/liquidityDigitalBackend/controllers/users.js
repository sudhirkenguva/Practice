let userServices = require("../services/users");
let getUsers = () => {
    return userServices.getUsers();
}

let createUser = (payload) => {
    return userServices.createUser(payload);
}

let deleteUser = (email) => {
    return userServices.deleteUser(email);
}

let updateUser = (payload) => {
    return userServices.updateUser(payload);
}

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
    deleteUser: deleteUser,
    updateUser: updateUser
}