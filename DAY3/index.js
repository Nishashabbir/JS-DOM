// const { jsx } = require("react/jsx-runtime");


// js functions structure 
// function functionName(parameters) {
//     // code to be executed
// }
// // lts write a  js function that calculates the factorial of a number using recursion.


// function factorial(n){
//     if (n===0 || n===1){
//         return 1;
//     }
//     else{
//         return n* factorial(n-1);
//     }
// }



// function type : arrow function  , anonymous functions 

// Does arrow function auto-return here?
// This version:
// user => getOrders(user.id)
// is a short arrow function.
// It automatically returns the expression.
// So this:

// user => getOrders(user.id)
// is equivalent to:

// function(user) {
//   return getOrders(user.id);
// }
// But ONLY when there are no {} braces.
// Auto return:
// x => x * 2
// same as:
// function(x) {
//   return x * 2;
// }
// NO auto return with braces:
// x => {
//   x * 2;
// }
// returns undefined.

// You must write:

// x => {
//   return x * 2;
// }

// That kind of function is called an anonymous function.
// Example from your code:
// .then(function(user) {
//   return getOrders(user.id);
// })
// This means:
// “When the previous promise finishes, run this function and give its result as user.”
// So .then() is calling the function for you later.
// You are only passing/creating the function here — not manually calling it yourself.


// // using js objects to store and manipulate data

// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// // accessing object properties
// console.log(person.name);
// // adding a new property to the object
// person.job = "Developer";   
// console.log(person.job);
// // modifying an existing property
// person.age = 31;  
// console.log(person.age); 
// // using js arrays to store and manipulate data

// let fruits = ["apple", "banana", "orange"];
// // accessing array elements
// console.log(fruits[0]);
// // adding a new element to the array
// fruits.push("grape");
// console.log(fruits);
// // removing the last element from the array
// fruits.pop();
// console.log(fruits);    

// // now lets make it a little complex by creating a function that takes an array of numbers and returns the sum of all the numbers in the array.

// function sumArray(arr){
//     let sum = 0;
//     for (let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }   
//     return sum;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers));

// // an array of objects to store information about a list of students, including their name, age, and grade.

// let students = [
//     {name: "Alice", age: 20, grade: "A"},
//     {name: "Bob", age: 22, grade: "B"},
//     {name: "Charlie", age: 21, grade: "C"}
// ];
// // accessing the name of the first student
// console.log(students[0].name);
// // adding a new student to the array
// students.push({name: "David", age: 23, grade: "A"});
// console.log(students);
// // modifying the grade of the second student
// students[1].grade = "A";
// console.log(students[1].grade);





// try second 


// functions , list , objects , function to use array , list of objects 


// list operations 

// fruits = ["apple " , "banana" , "cherry "]
// console.log(fruits[0])

// for (let item of fruits ){
//  console.log(item)
// }

// fruits[1]="watermelon"
// console.log(fruits)

// fruits.push("banana")
// fruits.push("guava")
// console.log(fruits)
// fruits.pop()
// console.log(fruits)


// now using js objects 


let person = {
    name : "usman" , 
    marks : 20, 
    phone : "1234"
}
// the double quotes on keys are optional but the double quotes on values are mandatory if the value is a string.


// accessing the elements 
console.log(person.marks)
console.log(person.name)
console.log(person["phone"])

person.marks=30

console.log(person)

// for loop on object 

// accessing key and values 

for (let key in  person){
    console.log(key + " : " + person[key])
}

for (let [key  , value] of Object.entries(person)){
    console.log(key + ": " + value)
}


// sum of array elements through a function 

// function sumArray(arr){
//    let  sum=0;
//    for (let i=0; i<arr.length; i++)
//     sum+=arr[i]
//     return sum;
// }

// list=[1, 2, 3, 4]
// console.log(sumArray(list))


// an array of objects 

let students= [
   {
   "name" : "sana " , "age" : 20 , "marks" : 19
    } , 
   {
   "name" : "nisha " , "age" : 20 , "marks" : 20
    } , 
   {
   "name" : "alia " , "age" : 18 , "marks" : 19
    }
]

console.log(students[1].marks)
console.log(students[1].name)
console.log(students[2].age)


