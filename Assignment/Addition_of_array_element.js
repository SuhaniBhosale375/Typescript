var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
function Addition() {
    var i = 0;
    var Add = 0;
    for (i = 0; i < Arr.length; i++) {
        Add = Add + Arr[i];
    }
    console.log("Addition is :" + Add);
}
Addition();
