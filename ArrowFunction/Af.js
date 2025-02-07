const add=(a,b)=> a+b;
const sub=(a,b)=> a-b;
const mul=(a,b)=> a*b;
const div=(a,b)=> a/b;

var a=parseInt(prompt("Enter the A= "));
var b=parseInt(prompt("Enter the B= "));

var Choice=parseInt(prompt("1 for add\n2 for sub\n3 for mul\n4 for div\nEnter the Choice="));
var r;
switch(Choice){
    case 1:
        r=add(a,b)
        console.log(r)
        break;
    
    case 2:
        r=sub(a,b)
        console.log(r)
        break;
    
    case 3:
        r=mul(a,b)
        console.log(r);
        break;
    
    case 4:
        r=div(a,b)
        console.log(r)
        break;
}