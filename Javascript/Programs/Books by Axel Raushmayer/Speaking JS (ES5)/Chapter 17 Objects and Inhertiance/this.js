// ===================================== snippet 1 =====================================
// let obj = {
//     count: 0,
//     inc: function() {
//         this.count++;
//     }
// };

// console.log(obj.count);
// obj.inc();
// console.log(obj.count);

// let fun = obj.inc.bind(obj);
// fun();
// console.log(obj.count);

// ===================================== snippet 2 =====================================
// let obj = {
//     friends: ['f1','f2','f3','f4'],
//     getFriends: function() {
//         console.log(this.friends);
//     }
// }

// obj.getFriends();

// ===================================== snippet 3 =====================================
let obj = {
    name: 'Sudhir',
    friends: ['f1','f2','f3'],
    msgs : function() {
        let that = this;
        this.friends.forEach(function(frnd){
            console.log(that.name+' knows '+frnd);
        },this);
    }
};

obj.msgs();









