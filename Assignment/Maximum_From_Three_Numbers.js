function main() {
    var No1 = 23;
    var No2 = 89;
    var No3 = 6;
    var ret = 0;
    ret = Maximum(93, 89, 6);
    console.log("Maximum number is : " + ret);
}
function Maximum(value1, value2, value3) {
    if ((value1 >= value2) && (value1 >= value3)) {
        return value1;
    }
    else if ((value2 >= value3) && (value2 >= value1)) {
        return value2;
    }
    else {
        return value3;
    }
}
main();
