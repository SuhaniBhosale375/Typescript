
var Arr : number[] = [23, 89, 6, 29, 56, 45, 77, 32];

function SecMaximum() : number
{
    var i : number = 0;
    var Max :  number = 0;
    var SecMax : number = 0;

    for(i = 0; i < Arr.length;i++)
    {
        if(Arr[i] > Max)
        {
            SecMax = Max;
            Max = Arr[i];
        }
        else if((Arr[i]> SecMax) && (Arr[i] < Max))
        {
            SecMax = Arr[i];
        }
        
    }

    return SecMax;

}

function main() : void
{
    var ret : number = 0;

    ret = SecMaximum();

    console.log("Second maximum element is "+ret);

}

main();
