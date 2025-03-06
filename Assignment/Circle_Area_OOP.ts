class Circle
{
    rad : number;
    pi : number;

    constructor(a : number)
    {
        this.rad = a;
        this.pi = 3.14;
    }

    Area()
    {
        var area : number = 0;

        area = this.pi * this.rad * this.rad;

        return area;
    }

}

  
function main() : void
{
    var obj1 = new Circle(5);
    var obj2 = new Circle(11);
    var ret : number = 0;
    
    console.log("*******First Object******");
   
    ret = obj1.Area();
    console.log("Area of circle : "+ret);
   
    console.log("*******Second Object******");

    ret = obj2.Area();
    console.log("Area of circle : "+ret);
}


main();
