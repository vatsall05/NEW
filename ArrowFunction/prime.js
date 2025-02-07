const isPrime=(x)=>{
    for(let i=2;i<x;i++)
    {
        if(x%i==0)
        {
             return false;
        }
    }
    return true;
}

var y=isPrime(11);
console.log(y);