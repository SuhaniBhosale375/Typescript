var Prime = /** @class */ (function () {
    function Prime(a) {
        this.no = a;
    }
    Prime.prototype.CheckPrime = function () {
        var i = 0;
        var flag = false;
        for (i = 2; i < this.no; i++) {
            if ((this.no % i) == 0) {
                flag = true;
                break;
            }
        }
        if (flag == false) {
            return true;
        }
        else {
            return false;
        }
    };
    return Prime;
}());
function main() {
    var bret = false;
    var value = 12;
    var obj = new Prime(value);
    bret = obj.CheckPrime();
    if (bret == false) {
        console.log(value + " is not a prime number.");
    }
    else {
        console.log(value + " is a prime number.");
    }
}
main();
