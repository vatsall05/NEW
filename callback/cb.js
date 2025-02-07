// function demo()
// {
//     console.log("demo function called..");
    
// }


// function test(x){
//     // console.log(x);
//     x()
    
// }

// // test(10)
// // test(14.6745)
// // test("ram")
// // test(true)

// test(demo)







// const science = (option)=>{
//     console.log(option.name + " addmision confirm in science with per " + option.per);
    
// }

// const commerce = (option)=>{
//     console.log(option.name + " addmision confirm in commerce with per " + option.per);
// }

// const art = (option)=>{
//     console.log(option.name + " addmision confirm in art with per " + option.per);
// }

// // cb -- callback 
// const addmision = (file , cb)=>{

//     cb({name:"rahul",per:file})
// }

// var percentage = 71;

// if(percentage > 90)
// {
//     addmision(percentage,science)
// }
// else if(percentage > 70)
// {
//     addmision(percentage,commerce)
// }
// else if(percentage > 50)
// {
//     addmision(percentage,art)
// }










// const science = (option)=>{
//     return option.name + " addmision confirm in science with per " + option.per
    
// }

// const commerce = (option)=>{
//     return option.name + " addmision confirm in commerce with per " + option.per
// }

// const art = (option)=>{
//     return option.name + " addmision confirm in art with per " + option.per
// }

// // cb -- callback 
// const addmision = (file , cb)=>{

//     var x = cb({name:"rahul",per:file})
//     console.log(x);
    
// }

// var percentage = 71;

// if(percentage > 90)
// {
//     addmision(percentage,science)
// }
// else if(percentage > 70)
// {
//     addmision(percentage,commerce)
// }
// else if(percentage > 50)
// {
//     addmision(percentage,art)
// }














// const science = (option)=>{
//     return option.name + " addmision confirm in science with per " + option.per
    
// }

// const commerce = (option)=>{
//     return option.name + " addmision confirm in commerce with per " + option.per
// }

// const art = (option)=>{
//     return option.name + " addmision confirm in art with per " + option.per
// }

// // cb -- callback 
// const addmision = (file , cb)=>{

//     // var x = cb({name:"rahul",per:file})
    

//     // return x;


//     return cb({name:"kunal",per:file})
    
// }

// var percentage = 71;
// var temp;

// if(percentage > 90)
// {
//     temp = addmision(percentage,science)
// }
// else if(percentage > 70)
// {
//     temp = addmision(percentage,commerce)
// }
// else if(percentage > 50)
// {
//     temp = addmision(percentage,art)
// }
// console.log(temp);










// const science = (option)=>option.name + " addmision confirm in science with per " + option.per
    


// const commerce = (option)=> option.name + " addmision confirm in commerce with per " + option.per 


// const art = (option)=> option.name + " addmision confirm in art with per " + option.per


// // cb -- callback 
// const addmision = (file , cb)=> cb({name:"chetan",per:file})

//     // var x = cb({name:"rahul",per:file})
    

//     // return x;

// var percentage = 71;
// var temp;

// if(percentage > 90)
// {
//     temp = addmision(percentage,science)
// }
// else if(percentage > 70)
// {
//     temp = addmision(percentage,commerce)
// }
// else if(percentage > 50)
// {
//     temp = addmision(percentage,art)
// }
// console.log(temp);











// const singapore = (file)=>{

//     return file.name + " your tour confirm in singapore " + file.message
// }

// const lasvegas = (file)=>{
//     return file.name + " your tour confirm in las vegas " + file.message
// }

// const goa = (file)=>{
//     return file.name + " your tour confirm in goa " + file.message
// }


// const travel = (option,cb)=>{
//     return cb({name:"jinendra",message: option + " tickets confirm.."})
// }


// var budget = 4000;
// var temp;

// if(budget > 3500)
// {
//     temp = travel(budget,singapore)
// }
// else if(budget > 2500)
// {
//     temp = travel(budget,lasvegas)
// }
// else if(budget > 1500){
//     temp = travel(budget,goa)
// }

// console.log(temp);










// const pdfHandler = (option)=>{
//     return option.fname + " pdf handler help to upload file..."
// }

// const wordHandler = (option)=>{
//     return option.fname + " word handler help to convert file..."
// }

// const excelHandler = (option)=>{
//     return option.fname + " excel handler help to process file..."
// }


// const Handler = (cb,file)=>{
//     var x = cb({fname:file,size:"1000kb"})
//     console.log(x);
    
// }

// var fileName = "abc.word";

// if(fileName.endsWith(".pdf")){
//     Handler(pdfHandler,fileName)
// }
// else if(fileName.endsWith(".word")){
//     Handler(wordHandler,fileName)
// }
// else if(fileName.endsWith(".excel")){
//     Handler(excelHandler,fileName)
// }