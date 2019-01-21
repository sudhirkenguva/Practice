let fruit1 = {
    name: 'Apple',
    price: 150,
    weight: '1kg',
    printPrice: pricePer10Kgs

};

let fruit2 = {
    name: 'Orange',
    price: 180,
    weight: '2kgs',
    printPrice: pricePer10Kgs
};

function pricePer10Kgs() {
    console.log(this.name, 'has', this.price * 10, 'per 10kgs');
}

// fruit1.printPrice(); // 1500
// fruit2.printPrice(); // 1800

fruit1.printPrice.apply(fruit2);