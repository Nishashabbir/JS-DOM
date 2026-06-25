
// task //////////////////////////////////

function getNumber(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(10)
        }, 2000);
    })
       
}

// getNumber().then(console.log)


async function  showNumber(){ //here async means that showNumber will be that function in which we will wait or pause for other 
   const result = await getNumber() //if you store it without braces , it won't bother even to show the result but will store the same function definition 
   console.log(result)

}

showNumber()

// // old way was writing this , but infact in async await js is internally doing this  : 
// getNumber()
//   .then((num)=>{
// console.log(num)
// })
// // learnt 
// // async returns promise
// // await extracts resolved value
// // async/await is promise syntax underneath




// // task ///////////////////////////////

// function getUser(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             if (Math.random()>0.5){
//                 resolve({id : 1 , "name" : "nisha"})
//             }
//             else{
//                 reject("Network failure ")
//             }
            
//         }, 1000);
//     })
// }

// function getorders(id){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(["order1" , "order2" , "order3"])
//         }, 1000);
//     })
// }



// // async function processdata() {
    
// //     try{
// // const user = await getUser() //it will resolve an object stored in user 
// //     const Orders = await getorders(user.id)
    
// //     console.log(Orders)//provides a list 
// //     console.log(Orders[0]) //provides a first order     
// //     }
// //     catch(error){
// //         console.log("Error" , error)
// //     }
    
// // }

// // wrong use of Promise.all 
// // async function processdata() {
// //     result= await Promise.all([getUser() , getorders()])


// //     try{
// // const user =  getUser() //it will resolve an object stored in user 
// //     const Orders =  getorders(user.id)
    
// //     console.log(Orders)//provides a list 
// //     console.log(Orders[0]) //provides a first order     
// //     }
// //     catch(error){
// //         console.log("Error" , error)
// //     }
    
// // }

// // processdata()

// //  Note : Alternative (parallel where possible)
// // Only use Promise.all when things don’t depend on each other:

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

// // …but only if getorders() does NOT need user.id.

// //  Why you saw undefined

// // Usually one of these:

// // You didn’t await → got a Promise instead of data
// // You used function without () → never executed
// // You accessed .id on a Promise → undefined / crash
// // You ignored Promise.all result entirely



// /////////////////////////////////////////////

// // task to execute the processes with Promise.all 

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

// // output: 
// // [ 'task1 is resolved', 'task2 is resolved', 'task3 is resolved' ]




// // Note : so we use try and catch while getting the results and resolve and reject for creating promises

// // While CREATING promises:

// // Use:

// // resolve()
// // reject()

// // Example:

// // new Promise((resolve, reject) => {})
// // While USING promises with async/await:

// // Use:

// try { }
// catch(error) { }

// // Example:

// // try {
// //    const data = await fetchData()
// // }
// // catch(error) {
// //    console.log(error)
// // }
// // Mental model:
// // Situation	Use
// // creating async operation	resolve / reject
// // handling success/failure result	try / catch

// // And yes:

// // reject()

// // eventually becomes:

// // catch(error)

// // through the promise system.




// // ///////////////////////////////////TASK

// function func1(){
//     return new Promise((resolve , reject)=>{
//         if (Math.random()>0.5){
//             resolve("A done")
//         }
//         else{
//             reject("A is not done yet ")
//         }
//     })
// }
// function func3(){
//     return new Promise((resolve , reject)=>{
//         if (Math.random()>0.5){
//             resolve("C done")
//         }
//         else{
//             reject("C is not done yet ")
//         }
//     })
// }
// function func2(){
//     return new Promise((resolve , reject)=>{
//         if (Math.random()>0.5){
//             resolve("B done")
//         }
//         else{
//             reject("B is not done yet ")
//         }
//     })
// }

// async function run() {
//     // const [a , b , c] = await Promise.all([func1() , func2() , func3()])
//     //  console.log(func1)
//     //  console.log(func2)
//     //  console.log(func3) //here we are not calling the functions so it will not wait for the promises to be resolved and will just print out the function definitions
//     //  second way 
//     try{

//     const result = await Promise.all([func1() , func2() , func3()])
//     console.log(result)

//     }
// catch(error){
//     console.log(error)
// }
// }

// run() //you always forget to call the function 

// // now code is correct but still error but this means : 
// // Promise.all RULE (MOST IMPORTANT)
// // Promise.all([p1, p2, p3])

// //  If ANY ONE fails:

// // it immediately throws
// // other promises are ignored
// // it jumps to catch




// // already rsolved promises 
// Promise.resolve(5)
//   .then(num => {
//     return num * 2;
//   })
//   .then(result => { //.then() automatically wraps returned values into promises.
//     console.log(result);
//   });


//   // here Promise.resolve is used to create a promise that is already resolved with the value 5. Then, the first .then() takes that value (5), multiplies it by 2, and returns 10. The second .then() receives that result (10) and logs it to the console. So the output will be 10.
// // basically this is a shortcut for creating a promise that is already resolved with a specific value, and it allows you to chain .then() calls to process that value.
// // but when we use Promise.all or Promise.race , that structure means that we are waiting for multiple promises to resolve or reject, and we want to handle their results together.
// // In the case of Promise.all, it waits for all the promises in the array to resolve, and if any one of them rejects, it immediately rejects with that reason. If all promises resolve successfully, it resolves with an array of their results.




// // now here we will use a real kind of promise.race program to deeply understand that 

// function promise1(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("promise1 is resolved")
//         }, 1000);
//     })

// }
// function promise2(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("promise2 is resolved")
//         }, 500);
//     })
// }


// async function run() {
//     try{
//         const result = await Promise.race([promise1() , promise2()])
//         console.log(result)
//     }
//     catch(error){
//         console.log(error)
//     }   
// }

// run()   


// // apprently the promise2 had 500 mili seconds , less than the promise1 so it was fast in race and resolved earlier than promise1 and hence the output is :
// // promise2 is resolved




// // function timeout() {
// //   return new Promise((_, reject) => {
// //     setTimeout(() => reject("TIMEOUT"), 2000);
// //   });
// // }

// // function fetchData() {
// //   return new Promise(res => {
// //     setTimeout(() => res("DATA RECEIVED"), 5000);
// //   });
// // }

// // Promise.race([fetchData(), timeout()])
// //   .then(console.log)
// //   .catch(console.log);


// Promise.resolve("hello Nisha")
//     .then(console.log) //or you can write like this 
//     // .then((message)=>{
//     //     console.log(message)
//     // })

//     // both ways you can write as .then itself has the resolved value as parameter and you can directly log it or you can write a function to log it

// // starting with promise1.resolve is kind of already resolved promises types 