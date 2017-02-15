//In typescript: function overloading does not allow multiple function implementations 
//It is users responsibility to use single implementation for multiple function signatures.
//We will have multiple declarations with common implementation. 
{
    function volume(radius, height) {
        if (height) {
            console.log("Volume of Cylinder is " + (Math.PI) * radius * radius * height);
        }
        else {
            console.log("Volume of Sphere is " + (4 / 3) * (Math.PI) * Math.pow(radius, 3));
        }
    }
    volume(5);
    volume(2, 3);
}
//# sourceMappingURL=functionOverload.js.map