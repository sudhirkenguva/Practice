{
    var Fruit;
    (function (Fruit) {
        Fruit[Fruit["Apple"] = 0] = "Apple";
        Fruit[Fruit["Mango"] = 1] = "Mango";
        Fruit[Fruit["Orange"] = 2] = "Orange";
        Fruit[Fruit["Cherry"] = 3] = "Cherry";
    })(Fruit || (Fruit = {}));
    console.log(Fruit.Apple);
    console.log(Fruit.Mango);
    console.log(Fruit.Orange);
    console.log(Fruit.Cherry);
}
//# sourceMappingURL=enums.js.map