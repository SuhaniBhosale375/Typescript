var Circle = /** @class */ (function () {
    function Circle(a) {
        this.rad = a;
        this.pi = 3.14;
    }
    Circle.prototype.Area = function () {
        var area = 0;
        area = this.pi * this.rad * this.rad;
        return area;
    };
    return Circle;
}());
function main() {
    var obj1 = new Circle(5);
    var obj2 = new Circle(11);
    var ret = 0;
    console.log("*******First Object******");
    ret = obj1.Area();
    console.log("Area of circle : " + ret);
    console.log("*******Second Object******");
    ret = obj2.Area();
    console.log("Area of circle : " + ret);
}
main();
