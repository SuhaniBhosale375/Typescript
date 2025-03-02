var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
function SecMaximum() {
    var i = 0;
    var Max = 0;
    var SecMax = 0;
    for (i = 0; i < Arr.length; i++) {
        if (Arr[i] > Max) {
            SecMax = Max;
            Max = Arr[i];
        }
        else if ((Arr[i] > SecMax) && (Arr[i] < Max)) {
            SecMax = Arr[i];
        }
    }
    return SecMax;
}
function main() {
    var ret = 0;
    ret = SecMaximum();
    console.log("Second maximum element is " + ret);
}
main();
