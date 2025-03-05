var Arithematic = /** @class */ (function () {
    function Arithematic(a, b) {
        this.no1 = a;
        this.no2 = b;
    }
    Arithematic.prototype.Addition = function () {
        var sum = 0;
        sum = this.no1 + this.no2;
        return sum;
    };
    Arithematic.prototype.Substraction = function () {
        var sub = 0;
        sub = this.no1 - this.no2;
        return sub;
    };
    Arithematic.prototype.Multiplication = function () {
        var mult = 0;
        mult = this.no1 * this.no2;
        return mult;
    };
    Arithematic.prototype.Division = function () {
        var div = 0;
        div = this.no1 / this.no2;
        return div;
    };
    return Arithematic;
}());
function main() {
    var obj1 = new Arithematic(10, 20);
    var obj2 = new Arithematic(15, 10);
    var ret = 0;
    console.log("*******First Object******");
    ret = obj1.Addition();
    console.log("Addition is :" + ret);
    ret = obj1.Substraction();
    console.log("Substraction is :" + ret);
    ret = obj1.Multiplication();
    console.log("Multiplication is :" + ret);
    ret = obj1.Division();
    console.log("Division is :" + ret);
    console.log("*******Second Object******");
    ret = obj2.Addition();
    console.log("Addition is :" + ret);
    ret = obj2.Substraction();
    console.log("Addition is :" + ret);
    ret = obj2.Multiplication();
    console.log("Multiplication is :" + ret);
    ret = obj2.Division();
    console.log("Division is :" + ret);
}
main();
