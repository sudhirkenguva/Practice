//using functions as factories or constructors

function Point(x,y) {
    this.x = x;
    this.y = y;
}

Point.prototype.distance = function() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
}

var p1 = new Point(4,5);

console.log(p1.distance().toFixed(5),"Units");