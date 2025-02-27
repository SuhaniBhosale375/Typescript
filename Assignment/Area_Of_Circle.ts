function main() : void
{
    var radius : number = 5;
    var ret : number = 0.0;
    var pi : number = 3.14
   
    ret = Area(radius,pi);

    console.log("Area of circle : "+ret);

}

function Area(value1 : number,value2 : number) : number
{
    var area : number = 0.0;

    area = value1*value1*value2;

    return area;
}

main();
