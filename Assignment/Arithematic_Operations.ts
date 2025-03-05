class Arithematic
{
    no1 : number;
    no2 : number;

    constructor(a : number, b : number)
    {
        this.no1 = a;
        this.no2 = b;
    }

    Addition()  : number
    {
        var sum : number = 0;
        sum = this.no1 + this.no2;
        return sum;
    }

    Substraction()  : number
    {
        var sub : number = 0;
        sub = this.no1 - this.no2;
        return sub;
    }

    Multiplication() : number
    {
        var mult : number = 0;
        mult = this.no1 * this.no2;
        return mult;
    }

    Division() : number
    {
        var div : number = 0;
        div = this.no1 / this.no2;
        return div;
    }
}
  
function main() : void
{
    var obj1 = new Arithematic(10,20);
    var obj2 = new Arithematic(15,10);
    var ret : number = 0;
    
    console.log("*******First Object******");
    
    ret = obj1.Addition();
    console.log("Addition is :"+ret);
   
    ret = obj1.Substraction();
    console.log("Substraction is :"+ret);
   
    ret = obj1.Multiplication();
    console.log("Multiplication is :"+ret);

    ret = obj1.Division();
    console.log("Division is :"+ret);
   
    console.log("*******Second Object******");

    ret = obj2.Addition();
    console.log("Addition is :"+ret);

    ret = obj2.Substraction();
    console.log("Addition is :"+ret);

    ret = obj2.Multiplication();
    console.log("Multiplication is :"+ret);

    ret = obj2.Division();
    console.log("Division is :"+ret);
}


main();
