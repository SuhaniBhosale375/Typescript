function main() : void
{
    var No : number = 20;

    Factor(No);

}

function Factor(value : number) : void 
{
    var i : number = 0;
    for(i = 0; i <= (value/2); i++)
    {
        if(value % i == 0)
        {
            console.log(i+"\t");
        }
    }
}

main();
