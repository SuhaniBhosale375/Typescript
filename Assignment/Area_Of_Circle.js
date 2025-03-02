function main() {
    var radius = 5;
    var ret = 0.0;
    var pi = 3.14;
    ret = Area(radius, pi);
    console.log("Area of circle : " + ret);
}
function Area(value1, value2) {
    var area = 0.0;
    area = value1 * value1 * value2;
    return area;
}
main();
