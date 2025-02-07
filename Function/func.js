// function : code reusiblity 
// function  : function keyword
// return : return keyword

// c programming language
// void add(int a , int b){

// }

// int mul(int x){

// }


// javascript : function 

// there are four types of functions
// 1. without return type without argumante 
// 2. without return type with argument 
// 3. with return type without argumante
// 4. with return type with argument

// 1. without return type without argumante 
function demo()
{
    console.log("Demo function called...");
    
}

// demo()

// 2. without return type with argument 

function add(a,b,c,d)
{

    console.log("Addition = ", a+b);
    
}

// add(3,"ram")
// add(3,6)


// 3. with return type without argumante
function test()
{
    return "test function call...." + 10
}

// var x = test()
// console.log(x);

// console.log(test());

// 4. with return type with argument

function mul(x,y)
{
    return "Multiply = " + x*y;
}

var x = mul(3,4)
// console.log("Multiply = ",x);
console.log(x);







function science(fname,per)
{
    console.log(fname + " your addmision confirm in science stream with per " + per);
    
}

function commerce(fname,per){
    console.log(fname + " your addmision confirm in commerce stream with per " + per);
}

function arts(fname,per){
    console.log(fname + " your addmision confirm in arts stream with per " + per);
}

var percentage = 81;
// var name = "praful"
var name = prompt("Enter your name")


if(percentage > 90)
{
    science("rahul",percentage)
}
else if(percentage > 70){
    commerce(name,percentage)
}
else if(percentage > 50){
    arts(name,percentage)
}















function science(fname,per)
{
    return fname + " your addmision confirm in science stream with per " + per
    
}

function commerce(fname,per){
    return fname + " your addmision confirm in commerce stream with per " + per
}

function arts(fname,per){
    return fname + " your addmision confirm in arts stream with per " + per
}

var percentage = 81;
var name = "praful" 
// var name = prompt("Enter your name")

var flag;

if(percentage > 90)
{
    flag = science("rahul",percentage)
}
else if(percentage > 70){
    flag = commerce(name,percentage)
}
else if(percentage > 50){
    flag = arts(name,percentage)
}














function lasvegas(option){

    return option.name + " your picnic confirm in llasvegas with package " + option.amount
}

function singapore(option){
    return option.name + " your picnic confirm in singapore with package " + option.amount
}

function newyork(option){
    return option.name + " your picnic confirm in new york with package " + option.amount
}


var budget = 2600;
var firstName = "rahul";
var flag;

if(budget > 3500)
{
    flag = singapore({name:"chetan",amount:budget})
}
else if(budget > 2500)
{
    flag = lasvegas({name:"anil",amount:budget})
}
else if(budget > 1500)
{
    flag = newyork(
        {
            name:firstName,
            amount:budget
        }
    )
}

console.log(flag);

// this is paragraph








function isPrime(num){

    for(let i=2;i<num;i++){
        if(num%i==0)
        {
            return false
        }
    }
    return true;


}

var x = isPrime(17)
console.log(x === true ? "Prime" : "Not prime");