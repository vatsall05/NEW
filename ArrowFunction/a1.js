// // function demo()
// // {
// //     console.log("demo function called..");
    
// // }

// // const pi = 3.14;

// // without without
// const demo = ()=>{
//     console.log("demo function called...");
    
// }

// // demo()

// // 2. without return with argument 

// const add = (x,y)=>{
//     console.log("Addition = " + (x+y));
    
// }

// // add(3,4)

// // 3. with return without argument

// const test = ()=>{
//     return "Test function called";
// }

// // var x = test()
// // console.log(x);

// // 4. with return with argument

// const mul = (a,b,c)=>{
//     return a*b*c;
// }

// var x = mul(2,3,4)
// console.log(x);

// // function isEven(num){

// //     if(num % 2 == 0)
// //     {
// //         return "Even number"
// //     }
// //     else {
// //         return "Odd number"
// //     }
// // }

// // var x = isEven(13)
// // console.log(x);

// // const isEven = (num)=>{
// //     return num % 2 === 0? "Even number" : "Odd number";
// // }

// // const x = isEven(14);
// // console.log(x);


// // const isEven = (num)=> num % 2 === 0? "Even number" : "Odd number";



// // var a = parseInt(prompt("Enter a number"))
// // const x = isEven(a);
// // console.log(x);


// // function demo(){
// //     console.log("Starting");
    
// // }

// const pi = 3.14;



// // const demo = ()=>{
// //     console.log("Starting...");
    
// // }

// // demo()

// // const isOdd = (x)=>{
// //     return x%2==1
// // }

// // var x = isOdd(12)
// // console.log(x === true ? "Odd" : "Even");



// // const isEven = (x)=> x%2==0 ? "Even" : "Odd";


// // var x = isEven(12)
// // console.log(x);


// const wordHandler = (option)=>{
//     return option.fname + " your wordHandler file ready.." 
// }

// const jpgHandler = (option)=>{
//     return option.fname + " your jpgHandler file ready.."
// }

// const txtHandler = (option)=>{
//     return option.fname + " your txtHandler file ready.."
// }

// const pngHandler = (option)=>{
//     return option.fname + " your pngHandler file ready.."
// }


// var user = "abc.word";
// var temp;


// if(user.endsWith(".word")){
//     temp = wordHandler(
//         {
//             fname:user,
//             size:"1000kb"
//         }
//     )
// }
// else if(user.endsWith(".jpg"))
// {
//     temp = jpgHandler({fname:user,size:"1000kb"})
// }
// else if(user.endsWith(".txt")){
//     temp = txtHandler({fname:user,size:"1000kb"})
// }
// else if(user.endsWith(".png")){
//     temp = pngHandler({fname:user,size:"1000kb"})
// }
// else{
//     console.log("Unsupported file type")
// }

// console.log(temp);

// const wordHandler = (option)=> option.fname + " your wordHandler file ready.." 


// const jpgHandler = (option)=> option.fname + " your jpgHandler file ready.."


// const txtHandler = (option)=> option.fname + " your txtHandler file ready.."


// const pngHandler = (option)=> option.fname + " your pngHandler file ready.."



// var user = "abc.word";
// var temp;


// if(user.endsWith(".word")){
//     temp = wordHandler(
//         {
//             fname:user,
//             size:"1000kb"
//         }
//     )
// }
// else if(user.endsWith(".jpg"))
// {
//     temp = jpgHandler({fname:user,size:"1000kb"})
// }
// else if(user.endsWith(".txt")){
//     temp = txtHandler({fname:user,size:"1000kb"})
// }
// else if(user.endsWith(".png")){
//     temp = pngHandler({fname:user,size:"1000kb"})
// }
// else{
//     console.log("Unsupported file type")
// }

// console.log(temp);