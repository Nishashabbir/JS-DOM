// Yes — JavaScript has a for...in loop, similar in spirit to Python, but it behaves differently (and this is where people accidentally step on rakes).

// 1. for...in in JavaScript

// It is used to loop over object keys (property names):

// const user = {
//   name: "Ali",
//   age: 25,
//   city: "Lahore"
// };

// for (let key in user) {
//   console.log(key);
// }

// Output:

// name
// age
// city

// If you want values:

// for (let key in user) {
//   console.log(user[key]);
// }
// ⚠️ Important: It is NOT like Python’s for x in list

// In Python:

// for x in [1, 2, 3]:
//     print(x)

// In JavaScript, for...in is NOT meant for arrays.

// If you do:

// const arr = [10, 20, 30];

// for (let i in arr) {
//   console.log(i);
// }

// You get:

// 0
// 1
// 2

// 👉 These are indexes (strings), not values.

// So it's more like:

// "0", "1", "2"
// 2. Correct loop for arrays → for...of

// This is the real Python-style equivalent:

// const arr = [10, 20, 30];

// for (let value of arr) {
//   console.log(value);
// }

// Output:

// 10
// 20
// 30
// 3. Quick comparison (mental model)
// Loop	Use case	Output
// for...in	object keys	"name", "age"
// for...of	values in arrays/iterables	10, 20, 30
// 4. Subtle gotcha (the “why is JS weird?” moment)

// Arrays in JS are objects under the hood:

// typeof [1,2,3] === "object"

// So for...in treats them like:

// { "0": 1, "1": 2, "2": 3 }

// That’s why it gives keys, not values.

// Bottom line
// Yes, for...in exists
// But it’s for objects
// For arrays, use for...of


