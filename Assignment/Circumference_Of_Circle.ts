class Circle
{
    rad : number;
    pi : number;

    constructor(a : number)
    {
        this.rad = a;
        this.pi = 3.14;
    }

    Area() : number
    {
        var area : number = 0;

        area = this.pi * this.rad * this.rad;

        return area;
    }

   
}
class CircleX extends Circle
{
    Circumference() : number
    {
        var cir : number = 0;
        cir = 2 * this.pi * this.rad;
        return cir;
    }
}
  
function main() : void
{
    var obj1 = new CircleX(5);
    var obj2 = new CircleX(11);
    var ret : number = 0;
    
    console.log("*******First Object******");
   
    ret = obj1.Area();
    console.log("Area of circle : "+ret);

    ret = obj1.Circumference();
    console.log("Circumference of circle : "+ret);
   
    console.log("*******Second Object******");

    ret = obj2.Area();
    console.log("Area of circle : "+ret);
    
    ret = obj2.Circumference();
    console.log("Circumference of circle : "+ret);
}


main();
