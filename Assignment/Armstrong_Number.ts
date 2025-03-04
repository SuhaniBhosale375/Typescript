
class Armstrong
{
    no : number;
  
    constructor(a : number)
    {
        this.no = a;
    }
    CheckArmstrong() : boolean
    {
        var Dig : number = 0; 
        var Sum : number = 0;
        var temp : number = this.no;

        while(temp != 0)
        {
            Dig = temp % 10;
            Sum = Sum + Math.pow(Dig,3);
            temp =Math.floor(temp / 10);
        }

        if(Sum == this.no)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

}

function main() : void
{
    var bret : boolean = false;
    var value : number = 153;
    
    var obj = new Armstrong(value);

    bret = obj.CheckArmstrong();

    if(bret == true)
    {
        console.log(value+" is Armstrong number.");
    }
    else
    {
        console.log(value+" is not a Armstrong number.");
    }
}

main();