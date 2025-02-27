function main() : void
{
    var No1 : number = 23;
    var No2 : number = 89;
    var No3 : number = 6;

    var ret : number = 0;
    ret = Maximum(93,89,6);

    console.log("Maximum number is : "+ret);

}

function Maximum(value1 : number,value2 : number,value3 : number) : number
{
    if((value1 >= value2) && (value1 >= value3))
    {
        return value1;
    }
    else if((value2 >= value3) && (value2 >= value1))
    {
        return value2;
    }
    else
    {
        return value3;
    }
}

main();
