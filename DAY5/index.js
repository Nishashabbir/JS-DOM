

let cart = [

    {    id: 1, price: 3600,quantity: 2 },
    {    id: 1, price: 2600,quantity: 2 }
]
// let total = 0;
// for (let item of cart) {
//     total += item.price * item.quantity
// }
// console.log(total) //it will give 5200 as result 


// now we can do the same thing by a reduce method of array in js 
// const result = array.reduce((accumulator, currentItem) => {
//   return updatedValue;
// }, initialValue);



// reduce is a method on iterables 
// const sum = cart.reduce((total , item)=>{// total is  a tracker which stores for every item 
//     // return total+item.quantity //this will give us the calculated value which we stored in sum 
//     return total+ item.quantity *item.price
// },0 )



// console.log(sum)



// arrow functions are used mostly inside the methods 

// Where arrow functions are used
// 1. Inside array methods (MOST COMMON)
// cart.forEach(item => console.log(item));
// cart.map(item => item.price);
// cart.reduce((sum, item) => sum + item.quantity, 0);


cart.forEach((item)=>console.log(item))
cart.map(item=> console.log(item.price)) //it gives the price of every item


// Why arrow functions confuse you
// Because you're seeing them in different places, but they’re actually the same thing.

//  Arrow function = just a short function
// (item) => item.quantity

// Same as:

// function(item) {
//   return item.quantity;
// }
//  Where arrow functions are used
// 1. Inside array methods (MOST COMMON)
// cart.forEach(item => console.log(item));
// cart.map(item => item.price);
// cart.reduce((sum, item) => sum + item.quantity, 0);

//  Pattern:

// “Do something for every item”

// 2. Assigned to variables
// const add = (a, b) => a + b;
// 3. As callbacks (event, timers, etc.)
// button.addEventListener("click", () => {
//   console.log("clicked");
// });
//  3. All array methods are the SAME pattern
// You noticed something very important:
// “on iterable we directly use forEach, reduce…”
// Exactly. These are just different types of loops.

//  Master this table (very important)
// Method	Purpose	Returns
// forEach	Just loop	nothing
// map	Transform items	new array
// filter	Select some items	new array
// reduce	Combine into one value	single value
//  Same data, different methods
// const cart = [
//   { price: 100, quantity: 2 },
//   { price: 50, quantity: 1 }
// ];
//  forEach (just loop)
// cart.forEach(item => {
//   console.log(item.price);
// });
//  map (create new array)
// const prices = cart.map(item => item.price);
// [100, 50]
//  reduce (one final value)
const total = cart.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);
//  4. var, let, const — why you’re confused

// Because tutorials explain definitions, not when to use them.

//  Simple rule (use this and stop overthinking)
//  Use const by default
// const total = 10;
//  means:

// "I won’t reassign this variable"

//  Use let when value changes
// let count = 0;
// count++;
//  Avoid var
// var x = 10; //  old, confusing

//  causes bugs due to function scope

//  Real example
// const cart = [...];        // doesn't change → const
// let total = 0;             // changes → let

// total = cart.length;
//  5. Why everything feels mixed

// Because JS uses functions everywhere

// You’re seeing:

// functions inside methods
// functions inside variables
// functions as arguments

//  It’s the same thing repeated in different pla
 

// now we will learn the use of the  filter property which is used to filter the data from the array

// const result = array.filter((item) => {
//   return condition;
// });

// for example : 
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);
