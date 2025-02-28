
var Arr : number[] = [23, 89, 6, 29, 56, 45, 77, 32];


function Maximum() : void 
{
    var i : number = 0;
    var Max :  number = 0;

    for(i = 0; i < Arr.length;i++)
    {
        if(Arr[i] > Max)
        {
            Max = Arr[i];
        }
    }

    console.log("Maximum element is :"+Max);

}

Maximum();