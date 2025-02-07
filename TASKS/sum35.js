// var a=parseInt(prompt("Enter the Number A = "))
// var b=parseInt(prompt("Enter the Number B = "))
// var c=parseInt(prompt("Enter the Number C = "))
// var sum=0

// if(a > 35 && b > 35 && c>35){
//     sum=a+b+c;    
// }
// else if(a>35 && b>35){
//     sum=a+b;
// }
// else if(a>35 && c>35){
//     sum=a+c;
// }
// else if(b>35 && c>35)
// {
//     sum=b+c;
// }
// else if(a>35 && b<35 && c<35){
//     console.log(a);
// }
// else if(b>35 && a<35 && c<35){
//     console.log(b);
// }
// else if(c>35 && b<35 && a<35){
//     console.log(c);
// }

// console.log(sum);

var a = parseInt(prompt("Enter the Number A = "));
var b = parseInt(prompt("Enter the Number B = "));
var c = parseInt(prompt("Enter the Number C = "));
var sum = 0;

if (a > 35) sum += a;
if (b > 35) sum += b;
if (c > 35) sum += c;

console.log(sum);