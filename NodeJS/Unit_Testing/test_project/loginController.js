    var isValidUser = function(userList, user) {
        // if user exists returns true otherwise false
        return (userList.indexOf(user) >= 0);
    }

    var isValidUserAsync = function(userList, user, callback) {
        setTimeout(function() {
        callback (userList.indexOf(user) >= 0);
        },3000);
    }

    var isValidUserAsyncPromise = function(userList, user) {
        return (new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve(userList.indexOf(user) >=0);
            },3000);
        }));
    }

module.exports = {
    isValidUser : isValidUser,
    isValidUserAsync : isValidUserAsync,
    isValidUserAsyncPromise:isValidUserAsyncPromise
};