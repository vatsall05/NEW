var num;
var count=0;

function prime(num){
    for(let i=0;i<=num;i++)
    {
        if(num%i==0)
        {
            count++;
        }
    }
    if(count==2)
    {
        return num,"is Prime Number";
    }
    else{
        return num," is not Prime Number";
    }
}

a=prime(11);
console.log(a);