// NOW comes the next evolution: Promises Developers got tired of deep nesting./////////////////
// So JavaScript introduced:
// Promise
// A Promise is basically:
// “I promise to give you a value later.
// Instead of:

getUser(function(user) {
});
// you can do:
getUser()
  .then(function(user) {

  });
// Cleaner.
function getUser() {

  return new Promise(function(resolve, reject) {

    setTimeout(function() {

      resolve({ name: "Ali" });

    }, 1000);

  });

}


// Is .then() basically passing a callback? YES.
// .then() receives a callback function.

// Example:

promise.then(callback)
or:
promise.then(function(data) {
  console.log(data);
})

// The promise stores that callback and runs it later when the async work finishes.

// 3. What is ACTUALLY happening internally?

// Imagine:

// getUser()
//   .then(user => getOrders(user.id))

// // Step-by-step:

// // Step 


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


      delay(2000) //here delay function is being called  , you should define first and then there is a callback in it after that 
  .then(() => {
    console.log("2 seconds passed");
  });


// full working function

function delay(ms){
  return new Promise ((resolve)=>{
    setTimeout(() => {
      resolve()
      
    }, ms);
  })
}

delay(2000)
  .then(()=>{
    console.log("after delay ")
  })



// fullfilled promise 

Promise.resolve(5)
  .then(num => {
    return num * 2;
  })
  .then(result => { //.then() automatically wraps returned values into promises.
    console.log(result);
  });


// this above function is basically the shortcut of this : 

new promise(resolve=>{
  resolve(5)
})  //instead of this we used , promise.resolve(5)
Promise.resolve(5)
  .then(num=> num *2)// the result is returned automatically when braces are not used and then this returned result is passed into .then which is taking it as argument and then printing it 
    .then(result=>{
      console.log(result)
    })


// tasks 

// Create a function://////////////////////////////////
// checkAge(age)
// Rules:

// use new Promise
// after 2 seconds:
// if age >= 18 → resolve "Allowed"
// otherwise reject "Not Allowed"
// Then CALL it using:

// .then()
// .catch()


// wrong version 
function checkAge(age){
  
    setTimeout((resolve , reject) => { // we can not send resolve , reject as parameters , they are special promise constructor , we must create a promise here 
  if (age >18){
    resolve("you are allowed ")
    
  }
    else{
reject("you are not allowed")
    }
 
  }, 2000);
  }
  


checkAge(12)
  .then((message)=>{ //basically the message here is what the resolve , reject have , like here  reject ("you are not allowed")
    console.log(message)
  })
  .catch((error)=>{
    console.log(error)
  })

// solution : *****************
function checkAge(age){
  return new Promise((resolve , reject)=>{
    setTimeout(() => {
  if (age >18){
    resolve("you are allowed ")
    
  }
    else{
reject("you are not allowed")
    }
 
  }, 2000);
  })
  
}

checkAge(12)
  .then((message)=>{ //basically the message here is what the resolve , reject have , like here  reject ("you are not allowed")
    console.log(message)
  })
  .catch((error)=>{
    console.log(error)
  })

  // now the above function is not working because we haven't wrapped it in promise so we will do that
// NOTE: resolve("Allowed")
// You are sending "Allowed" as data.
// Think of resolve() like:
// resolve(someData)
// Whatever you put inside resolve(...) gets received inside .then().
// So:

// resolve("Allowed")
  


// TASK//////////////////////////////////////////////////////
// Create 3 functions:

// 1. getUser()
// returns a Promise
// after 1 second → resolves:
// { id: 1, name: "Ali" }
// 2. getOrders(userId)
// returns a Promise
// after 1 second → resolves:
// ["order1", "order2", "order3"]
// 3. getOrderDetails(order)
// returns a Promise
// after 1 second → resolves:
// "Details of " + order

// call them like this 
// getUser
// then getOrders(user.id)
// then getOrderDetails(first order)
// then print final result

function getUser(){
  return new Promise((resolve )=>{
    setTimeout(() => {
      resolve({id:1 , name: "Ali"})
    }, 2000);
  })
}

function getOrders(userid){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(["order1", "order2", "order3"])
    }, 1000);
  })
}

function getOrderDetails(order){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve("details of order : " + order)
    }, 1000);
  })
}

// give us the results with the time 

// so basically resolve returns a value that is passed to the .then function , that function is callback 

// Whatever you return in .then() becomes input of next .then()”


// the return result of one becomes the input of the next 

// getUser() //here after calling getuser , resolve gave us an object , so .then receives object as user as it knows the incoming is object 
//   .then(user => { //now we returned getorders whose resolve gives us a list of orders , which becomes the input of the other .then function  then we send , orders to the next then 
//     return getOrders(user.id);
//   })
//   .then(orders => {
//     return getOrderDetails(orders[0]); // we used first order and passed it to getorderdetails , returning getorderdetails give us the details which we finally printed out in last 
//   })
//   .then(details => {
//     console.log(details);
//   });


 
// again practising it 

function getUser(){
  return new Promise(resolve=>{
    setTimeout(() => {
      resolve({id:1 , name: "Ali"})
    }, 2000);
  })
}

function getOrders(id){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(["order1" , "order2" , "order3"])
    }, 1000);
  })
}
// as we have to get the detail of a specific order so we will pass one order into the function 
function getOrderDetails(order){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve("order details are : " + order)
    }, 1000);

  })

}

// now we are calling these async functions with the callacks 

getUser()
  .then(user=>{ //.then receives what the previous function had returned to it , like returning a value to a callback function , but instead of traditional way of passing a function to another function which makes it messy , we chose promise and .then ways 
    return getOrders(user.id)// while calling a function we passed what the definition asked us to pass the parameters 
  }) //if you don't return , it will be undefined and it won't pass value to the next then 
  .then(orders=>{
    return getOrderDetails(orders[0])
  })
  .then(details=>{ //what the next .then recieves , is decided automatically by js 
    console.log(details)
  })

  // two things to NOTE : .then receives automatically the previous returned value  , so yes it is controlled by js 
  // but what to return is what we control not js 

  // like here : return getOrders(user.id);

// Then JS internally does something like:

// "Okay, I’ll wait for this promise.
// Once resolved,
// I’ll pass the result to next .then()."

// If YOU passed manually, it would look like callbacks again:///////////////////

// getUser(user => { //callback hell shape 
//   getOrders(user.id, orders => {
//     // getOrderDetails(orders[0], details => 



  // In short 

// take previous result
// ↓
// inject into next .then()
// ↓
// wait if promise returned
// ↓
// continue chain
