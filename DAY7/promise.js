// NOW comes the next evolution: Promises Developers got tired of deep nesting./////////////////
// So JavaScript introduced:
// Promise
// A Promise is basically:
// “I promise to give you a value later.
// Instead of:

// getUser(function(user) {

// });
// // you can do:

// getUser()
//   .then(function(user) {

//   });
// Cleaner.



function getUser() {

  return new Promise(function(resolve, reject) {

    setTimeout(function() {

      resolve({ name: "Ali" });

    }, 1000);

  });

}


Is .then() basically passing a callback?

YES.

.then() receives a callback function.

Example:

promise.then(callback)

or:

promise.then(function(data) {
  console.log(data);
})

// The promise stores that callback and runs it later when the async work finishes.

// 3. What is ACTUALLY happening internally?

// Imagine:

getUser()
  .then(user => getOrders(user.id))

Step-by-step:

// Step 