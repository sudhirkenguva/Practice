// JS module pattern.
// Module will work due to closures.

function myModule() {
    // Delcare some private variables.
    let list1 = [1, 2, 3];
    let list2 = ['India', 'America', 'British'];

    function add1(item1) {
        list1.push(item1)
    }

    function add2(item) {
        list2.push(item);
    }

    function printLists() {
        console.log('-----------------------------------------------------------------------')
        console.log(list1)
        console.log(list2)
        console.log('-----------------------------------------------------------------------')
    }

    return {
        add1: add1,
        add2: add2,
        printLists: printLists
    }
};


let m1 = myModule();
let m2 = myModule();

m1.printLists();
m2.printLists();

m1.add1('Sudhir');

m1.printLists();
m2.printLists();