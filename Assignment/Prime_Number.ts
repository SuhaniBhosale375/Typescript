
class Prime
{
    no : number;
  
    constructor(a : number)
    {
        this.no = a;
    }
    CheckPrime() : boolean
    {
        var i : number = 0;
        var flag : boolean = false;

        for(i = 2; i < this.no; i++)
        {
            if((this.no % i) == 0)
            {
                flag = true;
                break;
            }

        }

        if(flag == false)
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
    var value : number = 12;
    
    var obj = new Prime(value);

    bret = obj.CheckPrime();

    if(bret == false)
    {
        console.log(value+" is not a prime number.");
    }
    else
    {
        console.log(value+" is a prime number.");
    }
}

main();