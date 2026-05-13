
// Use:

// https://jsonplaceholder.typicode.com/todos/1
// REQUIREMENTS
// fetch data
// convert to JSON
// print:
// title
// completed status


const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
const data = await response.json()
console.log(data.title)
// console.log(data.status)

// so here the code is correct , the problem is status doesn't exist in the object if you log and see 
// completed exists though you can use it like that : 
console.log(data.completed) // now it does give us the real output false 

// HOW TO THINK LIKE A PRO
// Before using a field, ask:
// “Does this API actually return this key?”
//  QUICK DEBUG TRICK
// Always do this once:
// console.log(data);

// WHAT YOU JUST LEARNED

//  fetch → real API data
//  JSON parsing
//  object inspection
//  undefined = missing property (not async issue)


