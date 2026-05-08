
// STEP 1 — CALLBACKS (THE ROOT OF EVERYTHING)
//  What is a callback?

// A callback is simply:

// a function passed into another function to run later


// function greet(name){
//     console.log(`HI ${name}`)
// }

// greet("nisha")

////another function 
function processUser(callback){
    console.log("processing the user ")
    username="alia"
    callback(username)
}

// processUser(greet) //we just passed a function to another function 


// Sync vs Async callback


// synchronous callbacks run immediately and sequence by sequence means it will not run the second until the first one is executed 


[1,2,3,4,5].forEach(element => {
    console.log(element)
    
});

setTimeout(() => {//this is asynchronous , for this function js won't wait for 1s , it will keep executing the code after this and will handover the browser to callback 
    
   [1,2,3,4,5].forEach(element => {
    console.log(element)
    
});
// console.log("sorry for late , js didn't prioritize me ")
// }, 1000);
// //e.g the code after this will keep running 
// console.log("I was not stuck due to settime out function ")

// It is NOT guaranteed to run exactly at 1000ms
// It runs after at least 1000ms
// If the JS thread is busy, it can run later



// callbacks can be hard to manage 
// e.g 
// this happens When async tasks depend on previous async tasks.


function step1(callback){
  setTimeout(() => {
    console.log("step1 is done ! ")
    callback()
  }, 1000);
}
function step2(callback){
  setTimeout(() => {
    console.log("step2 is done ! ")
    callback()
  }, 1000);
}
function step3(callback){
  setTimeout(() => {
    console.log("step3 is done ! ")
    callback()
  }, 1000);
}


step1(function (){
    step2( function (){
        step3(function (){
            console.log("all is done!")
        })
    })
})

// We call it: “Pyramid of Doom”

// The IMPORTANT thing to understand

// Callback hell is NOT:

//  “callbacks are bad”

// It IS:

//  “deeply nested callbacks become unmanageable”

// Callbacks themselves are fine.


// What came after callback hell?
// JavaScript introduced:
// Promises
// async/await
// So this:

getUser(function(user) {
  getOrders(user.id, function(orders) {
    getOrderDetails(orders[0], function(details) {
      console.log(details);
    });
  });
});


// its promise version 
getUser()
  .then(user => {
    return getOrders(user.id);
  })
  .then(orders => {
    return getOrderDetails(orders[0]);
  })
  .then(details => {
    console.log(details);
  })
  .catch(error => {
    console.log(error);
  });

// // became:

const user = await getUser();
const orders = await getOrders(user.id);
const details = await getOrderDetails(orders[0]);

// console.log(details);

// Much flatter. // Much cleaner.


// why callbacks are needed ??

// a function that represents “what to do AFTER async work finishes”

// look basically async tasks are the part of real life that take time , but js can't freeze becuase of such long things so it starts those time taking tasks but doesn't wait for their finishing and continues to other 
// but it also needs a signal when that task has finished , otherwise , it won't know when the function has ended 
// so basically such signals are called "callbacks" .....

// without call back async will look like this 


// let data= fetchdata(); // now it can take time in getting the data , (any such function like downloading file )
// console.log(data) //wait js didn't wait for fetchdata() and went straight to console.log(data)
// but waittttttttt , how can we print the data immediately when we haven't fetch data yet..
// oh nooooooooooo so that's the problem , look we have a solution : 
// we say to js , when you fetch or load the data only then give us the data like this (this is what callback looks like )


// it basically means when such time taking process is finished i give you another function as an argument to tell me that it is finished or print its result after execution 
// function fetchdata(callback){ // a function inside an other function 
//     setTimeout(() => {
        
//         console.log("hey I am fetching the data , have some patience ")
//         result="Data ready " //here fetch data is finished , data is ready , now we should callback to signal js 
//         console.log("result is ready ")

//     callback(result)  //do callback when data is ready 
//     }, 2000);
//     // no matter how long your process takes time , you just print the result just after it , or print any code or task that depend on it which we can't print or execute without the main function 

// }

// fetchdata( (data)=>{
//     console.log("I got the data : here we go ! ")

// })



// here is another one 

function downloadfile(callback){
setTimeout(() => {
    console.log("the file is getting downloaded , please wait ")
    
    callback()
}, 2000);

callback() //if we call this outside the setitme out which is async , then this is no more a callback , this is a logical error as we are separtely calling it 

}

downloadfile(()=>{
    console.log("finally its downloaded ")
})



// js is not waiting for anything : What is actually doing the waiting?
// NOT JavaScript.
// It is:
// Browser (Web APIs)
// Node.js runtime
// OS (for file/network I/O)
// JS just says:
// “Hey system, go do this work. Tell me when done.”









