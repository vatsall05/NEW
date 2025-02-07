var company = [
    {
        name: "google",
        employees:[
            {
                id:101,
                name:"meet desai",
                salary:25600,
                email:"meet@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:102,
                name:"jane",
                salary:22000,
                email:"jane@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:103,
                name:"priti",
                salary:27800,
                email:"priti@gmail.com",
                IsMarried:true,
                child:2,
                gender:"female"
            }
        ]
    },
    {
        name:"facebook",
        employees:[
            {
                id:201,
                name:"jim",
                salary:24500,
                email:"jim@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:202,
                name:"sarah",
                salary:21500,
                email:"sarah@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:203,
                name:"akash",
                salary:26200,
                email:"akash@gmail.com",
                IsMarried:true,
                child:2,
                gender:"male"
            }
        ]
    },
    {
        name:"amazon",
        employees:[
            {
                id:301,
                name:"ankit",
                salary:26200,
                email:"ankit@gmail.com",
                IsMarried:false,
                child:0,
                gender:"male"
            },
            {
                id:302,
                name:"riya",
                salary:86000,
                email:"riya@gmail.com",
                IsMarried:true,
                child:1,
                gender:"female"
            },
            {
                id:303,
                name:"kriti",
                salary:62500,
                email:"kriti@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            }
        ]
    },
    {
        name:"flipkart",
        employees:[
            {
                id:401,
                name:"pooja",
                salary:29800,
                email:"pooja@gmail.com",
                IsMarried:false,
                child:0,
                gender:"female"
            },
            {
                id:402,
                name:"ritesh",
                salary:22500,
                email:"ritesh@gmail.com",
                IsMarried:true,
                child:1,
                gender:"male"
            },
            {
                id:403,
                name:"bhuwan",
                salary:28700,
                email:"bhuwan@gmail.com",
                IsMarried:false,
                child:0,
                gender:"male"
            }
        ]
    }
    
]



// 1.  Find the total number of employees in all companies.
// var c = company.map((comp)=>comp.employees.length).reduce((sum,emp)=>sum+emp,0);
// console.log(c);

// 2. Find the company where the employee named "riya" works.
// var c = company.find((comp)=>comp.employees.find((emp)=>emp.name==="riya")).name;
// console.log(c);

// 3. Calculate the average salary of employees across all companies.
// var c = company.map((comp)=>comp.employees.reduce((sum,emp)=>(sum+emp.salary)/3,0));
// console.log(c);

// 4. Find the names of all employees who are married.
// company.forEach((comp)=>
// {
//     comp.employees.forEach((emp)=>{
//         if(emp.IsMarried)
//         {
//             console.log(emp.name);
//         }
//     })   
// })

// 5. Count the total number of children across all employees

// var totalchild = company.map((comp)=>comp.employees.reduce((sum,emp)=>sum+emp.child,0)).reduce((sum,totalchild)=>sum+totalchild,0);
// // var tc=totalchild.reduce((sum,count)=>sum+count,0);
// console.log("Total Children = ",totalchild);

// 7. List all female employees.
// var female=company.map((comp)=>comp.employees.filter((emp)=>emp.gender==="female"));
// console.log("Female = ",female);

// 8. Count how many employees are not married.

// var c=company.map((comp)=>comp.employees.filter((emp)=>!emp.IsMarried).length).reduce((sum,Count)=>sum+Count,0);
// console.log(c);

// 9. Find the email addresses of all employees earning more than 30,000.
// var ema=company.map((comp)=>comp.employees.filter((emp)=>emp.salary>30000).map((em)=>em.email));
// console.log(ema);

// 10. Identify the total number of employees for each company.
// var x = company.map((comp)=>comp.employees.length);
// console.log(x);
