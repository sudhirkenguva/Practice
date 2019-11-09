let adminServices = require("../services/admin");
let userService = require("../services/users");

let checkForUser = async (username) => {
    let record = await adminServices.checkForUser(username);
    if (record && record.length > 0) {
        return true;
    } else {
        return false;
    }
}

let signup = async (username, password) => {
    return adminServices.signup(username, password);
}

let login = async (username, password) => {
    return adminServices.login(username, password);
}

module.exports = {
    signup: signup,
    login: login,
    checkForUser: checkForUser
}