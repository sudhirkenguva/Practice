let userModel = require("../db/models").userModel;
let getUsers = () => {
    return new Promise((resolve, reject) => {
        userModel.find({},{},(err,docs)=>{
            if(err) {
                reject("Error in getting document");
            }
            resolve(docs);
        });
    });
}

let createUser = (payload) => {
    return new Promise((resolve, reject) => {
        let record = new userModel({firstname:payload.firstname, lastname:payload.lastname, email:payload.email, phno:payload.phno, dept:payload.dept });
        record.save((err) => {
            if(err) {
                if(err.code == 11000)
                reject({status:400,msg:"User with the given email already exists"});
                else 
                reject({status:500,msg:"Error in adding the user"});

            }
            resolve("User successfully added");
        })

    });
}

let deleteUser = (email) => {
    return new Promise((resolve, reject) => {
        userModel.remove({email:email},(err)=>{
            if(err) {
                reject("Error in deleting the document");
            }
            resolve("document successfully deleted");
        });
    });
}

let updateUser = (payload) => {
    return new Promise((resolve, reject) => {
        userModel.update({_id:payload._id},{firstname:payload.firstname, lastname:payload.lastname, email:payload.email, dept:payload.dept, phno:payload.phno},(err,res)=>{
            if(err) {
                reject("Error in updating the document");
            }
            resolve("document successfully updated");
        });
    });
}

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
    deleteUser: deleteUser,
    updateUser: updateUser
}