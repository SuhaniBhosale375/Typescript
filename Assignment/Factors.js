function main() {
    var No = 20;
    Factor(No);
}
function Factor(value) {
    var i = 0;
    for (i = 0; i <= (value / 2); i++) {
        if (value % i == 0) {
            console.log(i);
        }
    }
}
main();
