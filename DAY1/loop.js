
// The function inside forEach is called a "callback function" - it's a function that gets "called back" for each item.

// let fruits = ["apple", "banana", "grapes", "orange", "mango"];
// fruits.forEach(function(fruit){
//     console.log("I love :" , fruit )
// }
// )   
// // no need to call simply function attached with the loop and loop attached with the collection 

// //method2 :  or we can create the function and then appply the loop on it like this : 

// function getfruits(fruit){
//     console.log("I like : " , fruit)
// }
// fruits.forEach(getfruits)   //the same results 


// // with index  

// fruits.forEach(function(fruit , index){
//     console.log(`I like : ${fruit} at ${index}`)
// })


// // we write the foreach loop like this 
// // fruits.forEach 
// // // and then we give the loop some instructions , what instructions ? like these : 

// // function(fruit) {
// //     console.log(fruit);
// // }


// // // now we can simply combine them as : 
// // fruits.forEach(function(fruit){
// //     console.log("I like : " , fruit )
// // })


// // other looops in js 
// // the traditional old one : 
// for (let i = 0; i < 3; i++) {
//   console.log("Hello!");
// }

// // while loop 
// let power = 2;
// while (power < 10) {
//   power = power * 2;
// }

// The for...of Loop (The Modern Way)
// This is for when you have a collection (like a list of fruits) and you want to touch every single one without worrying about numbers or math.

// The Code:

const fruits = ["🍎", "🍌"];
for (const fruit of fruits) {
  console.log(fruit);
}