
// task //////////////////////////////////

// function getNumber(){
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             resolve(10)
//         }, 2000);
//     })
       
// }

// async function  showNumber(){
//    const result = await getNumber() //if you store it without braces , it won't bother even to show the result but will store the same function definition 
//    console.log(result)

// }

// showNumber()

// old way was writing this , but infact in async await js is internally doing this  : 
// getNumber()
//   .then((num)=>{
// console.log(num)
// })
// learnt 
// async returns promise
// await extracts resolved value
// async/await is promise syntax underneath




// task ///////////////////////////////

function getUser(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            if (Math.random()>0.5){
                resolve({id : 1 , "name" : "nisha"})
            }
            else{
                reject("Network failure ")
            }
            
        }, 1000);
    })
}

function getorders(id){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(["order1" , "order2" , "order3"])
        }, 1000);
    })
}



// async function processdata() {
    
//     try{
// const user = await getUser() //it will resolve an object stored in user 
//     const Orders = await getorders(user.id)
    
//     console.log(Orders)//provides a list 
//     console.log(Orders[0]) //provides a first order     
//     }
//     catch(error){
//         console.log("Error" , error)
//     }
    
// }

// wrong use of Promise.all 
async function processdata() {
    result= await Promise.all([getUser() , getorders()])


    try{
const user =  getUser() //it will resolve an object stored in user 
    const Orders =  getorders(user.id)
    
    console.log(Orders)//provides a list 
    console.log(Orders[0]) //provides a first order     
    }
    catch(error){
        console.log("Error" , error)
    }
    
}

processdata()

//  Note : Alternative (parallel where possible)
// Only use Promise.all when things don’t depend on each other:

// async function processdata() {
//   try {
//     const user = await getUser();

//     const orders = await getorders(user.id);

//     console.log(orders);
//   } catch (error) {
//     console.log("Error", error);
//   }
// }

// // Or if independent:

// const [user, orders] = await Promise.all([
//   getUser(),
//   getorders()
// ]);

// …but only if getorders() does NOT need user.id.

//  Why you saw undefined

// Usually one of these:

// You didn’t await → got a Promise instead of data
// You used function without () → never executed
// You accessed .id on a Promise → undefined / crash
// You ignored Promise.all result entirely



/////////////////////////////////////////////

// task to execute the processes with Promise.all 

// function task1(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("task1 is resolved")
//         }, 1000);
//     })
   
// }

// function task2(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("task2 is resolved")
//         }, 1000);
//     })
   
// }

// function task3(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("task3 is resolved")
//         }, 1000);
//     })
   
// }

// async function run() {
//     try{ 
//      const   result = await Promise.all([task1() , task2() , task3()]) //await must ALWAYS be inside try if you want to catch errors. Because: await can THROW not just return values
//         console.log(result)
//     }
//     catch(error){
//         console.log(error)
//     }
    
// }

// run()

// output: 
// [ 'task1 is resolved', 'task2 is resolved', 'task3 is resolved' ]




// Note : so we use try and catch while getting the results and resolve and reject for creating promises

// While CREATING promises:

// Use:

// resolve()
// reject()

// Example:

// new Promise((resolve, reject) => {})
// While USING promises with async/await:

// Use:

// try { }
// catch(error) { }

// Example:

// try {
//    const data = await fetchData()
// }
// catch(error) {
//    console.log(error)
// }
// Mental model:
// Situation	Use
// creating async operation	resolve / reject
// handling success/failure result	try / catch

// And yes:

// reject()

// eventually becomes:

// catch(error)

// through the promise system.




///////////////////////////////////TASK

function func1(){
    return new Promise((resolve , reject)=>{
        if (Math.random()>0.5){
            resolve("A done")
        }
        else{
            reject("A is not done yet ")
        }
    })
}
function func3(){
    return new Promise((resolve , reject)=>{
        if (Math.random()>0.5){
            resolve("C done")
        }
        else{
            reject("C is not done yet ")
        }
    })
}
function func2(){
    return new Promise((resolve , reject)=>{
        if (Math.random()>0.5){
            resolve("B done")
        }
        else{
            reject("B is not done yet ")
        }
    })
}

async function run() {
    // const [a , b , c] = await Promise.all([func1() , func2() , func3()])
    //  console.log(func1)
    //  console.log(func2)
    //  console.log(func3)
    //  second way 
    try{

    const result = await Promise.all([func1() , func2() , func3()])
    console.log(result)

    }
catch(error){
    console.log(error)
}
}

run() //you always forget to call the function 

// now code is correct but still error but this means : 
// Promise.all RULE (MOST IMPORTANT)
// Promise.all([p1, p2, p3])

//  If ANY ONE fails:

// it immediately throws
// other promises are ignored
// it jumps to catch











