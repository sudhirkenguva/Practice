let bcrypt = require('bcrypt');
let saltRounds = 5;
let adminModel = require("../db/models").adminModel;
let checkForUser = async (userName) => {
    return new Promise((resolve, reject) => {
        adminModel.find({ username: userName }, (err, docs) => {
            if (err) {
                reject(err);
            }
            resolve(docs);
        });
    })
}

let signup = async (username, password) => {
    return new Promise(async (resolve, reject) => {
        let hash = await bcrypt.hash(password, saltRounds);
        let record = new adminModel({ username: username, password: hash });
        record.save((err) => {
            if (err) reject(err);
            resolve();
        })
    })
}

// let login = async (username, password) => {
//     // return new Promise(async (resolve, reject) => {
//     //     let user = await checkForUser(username);
//     //     if (user && user.length > 0) {
//     //         let result = await bcrypt.compare(password,user[0].password);
//     //         if(result == true) {
//     //          resolve("Login successfull");   
//     //         } else {
//     //             reject({status:401,msg:"Incorrect password"});
//     //         }
//     //     } else {
//     //         reject({status:401,msg:"Incorrect password"});
//     //     }
//     // });
//     passport.authenticate('local'),
//   (req, res) {
//     res.send(req.user);
//   }
// }



module.exports = {
    checkForUser: checkForUser,
    signup: signup
}