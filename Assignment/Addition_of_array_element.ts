
var Arr : number[] = [23, 89, 6, 29, 56, 45, 77, 32];


function Addition() : void 
{
    var i : number = 0;
    var Add :  number = 0;

    for(i = 0; i < Arr.length;i++)
    {
        Add = Add + Arr[i];
    }

    console.log("Addition is :"+Add);

}
Addition();