let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let adminSchema = new Schema({
    username: String,
    password: String
});

let userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    phno: String,
    dept: String
});

let depts = new Schema({
    name: String
})
let adminModel = mongoose.model('admins', adminSchema);
let userModel = mongoose.model('users', userSchema);
let deptModel = mongoose.model('depts', depts);


module.exports = {
    adminModel: adminModel,
    userModel: userModel
}