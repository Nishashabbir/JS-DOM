

// note :  can you can use catch with both .then as well as try catch block?
// the answer is yes you can use catch with both .then and try catch block but the way you use it is different

// fetch()
// fetch is a built in function in js to make network requests and it returns a promise

// so you can directly use .then and await on it 


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(console.log)

// it gives you a response object 

// you have to convert that into JSON but how ??
// const response = await fetch("https://jsonplaceholder.typicode.com/users")
// const data = response.json() // this will be a wrong way to use .json as it will again return us the promise and not the data itself we can use it like this 
// const data= response.then(res => res.json()) // this is the correct way to use .json() as it will return us the data in json format and not a promise
// const data = await response.json() // this is also correct way to use .json() as it will return us the data in json format and not a promise


// this is again a wrong version 
// const response= fetch("https://jsonplaceholder.typicode.com/users")
// const data= await response.json()
// console.log(data ) // why it failed becuase fetch is an async function itself we are directly storing the object in response , we should wait for it and then use further 


// // simply use this 

// const response= await fetch("https://jsonplaceholder.typicode.com/users")
// const data= await response.json()
// console.log(data ) // this will work because we are waiting for the fetch to complete and then we are waiting for the .json() to complete and then we are logging the data

// this is the correct way to use fetch and .json() together as we are waiting for both of them to complete before we log the data


// even when we use await with fetch still we say respose will also be awaited ? 
// fetch() is async → returns a Promise
// response.json() is also async → returns another Promise

// So we are not awaiting the response variable itself again.
// We already awaited fetch().



// now lets write a function 

// this has a mistake , wrong version 
// function getdata(){

//     try{
//         const respose = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await respose.json()
//         console.log(data)
//     }
//  catch(error){
//     console.log("ERROR " , error)
//  }


// }

// getdata()


// so the mistake was that we didn't write the async keyword with the function 
// await pauses execution until a Promise finishes.
// But JavaScript only allows that pause inside:

// an async function or top-level ES modules
// So this works:

// async function demo() {
//    await something()
// }

// This does NOT:
// function demo() {
//    await something()
// }
// because normal functions don’t know how to “pause”.

// normal function is like what is this await ?? only async understands that 


// IMPORTANT CRITERIA
// Use .then() when:
// you don’t want to make the function async
// short chaining is fine
// functional/chained style feels okay

// Example:

// fetch(url)
//    .then(r => r.json())
//    .then(data => console.log(data))
// Use async/await when:
// multiple async steps exist
// code becomes nested/confusing
// you want code that looks synchronous
// readability matters

// Example:

// async function loadUser() {
//    const response = await fetch(url)
//    const data = await response.json()

//    return data
// }

// This reads top-to-bottom like normal code.
// Much easier for humans.
// Humans are unfortunately part of software development.
// BIG IMPORTANT THING
// async WITHOUT await

// This is valid:

// async function hello() {
//    return "hi"
// }

// Even though no await exists.
// Why?
// Because:
// async

// AUTOMATICALLY wraps the return value in a Promise.
// So this:

// async function hello() {
//    return "hi"
// }

// is basically:
// function hello() {
//    return Promise.resolve("hi")
// }


// When do we NEED await?
// Only when you want to pause until a Promise resolves.
// Without await:

// const response = fetch(url)
// console.log(response)
// You’ll get:
// Promise { <pending> }

///////////////////////////////////////////////////////////

// correct version 

//  async function getdata(){ //bro use async keyword , only async can let us pause and use await 

//     try{
//         const respose = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await respose.json()
//         console.log(data)
//     }
//  catch(error){
//     console.log("ERROR " , error)
//  }


// }

// // getdata()
// getdata(data[0])    

// // Step	Meaning
// // fetch()	get response
// // response.json()	extract actual data




// // professional 
// async function getData() {

//   try {

//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error("Request failed");
//     }

//     const data = await response.json();

//     console.log(data);

//   } catch(error) {

//     console.log(error.message);

//   }

// }


/////////////////////////////////////////////////////
// muliple api calls 


//  async function loadUser(){

// const users= await fetch("https://jsonplaceholder.typicode.com/users")
// const posts= await fetch("https://jsonplaceholder.typicode.com/posts")
// const todos= await fetch("https://jsonplaceholder.typicode.com/todos")


// // now converiting them all in json and then logging would be messy code 
// console.log(users)
// console.log(todos)
// console.log(posts)


// }
// loadUser()







// improved version 
// instead of waiting for three networks , we should use promise.all 

// async function loaddashboard() {
//     try{
//   const [usrs , posts ,todos] = await Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{res.json()}) ,
//         fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json()) ,
//         fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()) 
//     ])
// // benefit of using that is that all the requests will be initiated together 
//     console.log(usrs)
//     console.log(posts)
//     console.log(todos)
//     // console.log(posts.title)
//     // console.log(todos.title)

//     }
// catch(error){
//     console.log("ERROR" , error)
// }
    
// }

// loaddashboard()




// here still we hard coded for each network resquest and converting into the json data 
// we could have ismply used the function like this 


// function getjson(url){
//   return  fetch(url).then((res)=> res.json()) //you gotta write the return statement in your own function as your function will be undefined otherwise if not returning anything 
// }


// // you gotta wrap this in side a function 
// const final = await getjson("https://jsonplaceholder.typicode.com/users")
// console.log(final)


// more improve version 



function getjson(url){
  return  fetch(url).then((res)=> res.json()) //you gotta write the return statement in your own function as your function will be undefined otherwise if not returning anything 
}


async function loaddata(){
const [a , b , c] = await Promise.all([
    // so at the end a , b, c will have user , posts , todos arrays of objects  not objects 
    getjson("https://jsonplaceholder.typicode.com/users") ,
    getjson("https://jsonplaceholder.typicode.com/posts") ,
    getjson("https://jsonplaceholder.typicode.com/todos") ,
    
    // getjson(url1) // you can take the url of your choices 
])

// console.log(a.name) //this is wrong , cuz a is array of objects , you should write like this 
console.log(a[0].name)  //this gives the result 
// console.log(b) //it will again give array of objects 
// console.log(c)

}

loaddata()
