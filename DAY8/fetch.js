

// note :  can you  use catch with both .then as well as try catch block?
// the answer is yes you can use catch with both .then and try catch block but the way you use it is different

// fetch()
// fetch is a built in function in js to make network requests and it returns a promise

// so you can directly use .then and await on it 


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(console.log)   //it automatically waits to resolve 

// it gives you a response object 

// you have to convert that into JSON but how ??
// without await(pending) and with await (response)
// const response = await fetch("https://jsonplaceholder.typicode.com/users") //better wrap it inside an async function as await is used only with that 
// console.log(response)
// const data = response.json() // this will be a wrong way to use .json as it will again return us the promise and not the data itself we can use it like this 
// const data= response.then(res => res.json()) // this is the correct way to use .json() as it will return us the data in json format and not a promise
// const data = await response.json() // this is also correct way to use .json() as it will return us the data in json format and not a promise


// this is again a wrong version 
// const response= fetch("https://jsonplaceholder.typicode.com/users")
// const data= await response.json()
// console.log(data ) // why it failed becuase fetch is an async function itself we are directly storing the object in response , we should wait for it and then use further 


// // simply use this 

const response= await fetch("https://jsonplaceholder.typicode.com/users")
const data= await response.json()
console.log(data ) // this will work because we are waiting for the fetch to complete and then we are waiting for the .json() to complete and then we are logging the data

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
//       throw new Error("Request failed"); //here new Error is used to create a new error object with the message "Request failed" and throw it to be caught in the catch block
//     }
//new keyword is used to create a new instance of the Error object with the specified message. It allows you to create custom error messages and throw them when certain conditions are not met. In this case, if the response is not ok (i.e., the request failed), we throw a new error with the message "Request failed".
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



// function getjson(url){
//   return  fetch(url).then((res)=> res.json()) //you gotta write the return statement in your own function as your function will be undefined otherwise if not returning anything 
// }


// async function loaddata(){
// const [a , b , c] = await Promise.all([
//     // so at the end a , b, c will have user , posts , todos arrays of objects  not objects 
//     getjson("https://jsonplaceholder.typicode.com/users") ,
//     getjson("https://jsonplaceholder.typicode.com/posts") ,
//     getjson("https://jsonplaceholder.typicode.com/todos") ,
    
//     // getjson(url1) // you can take the url of your choices 
// ])


// previoulsy we had called getjson and then stored in final and then logged it but now we are directly using it inside the promise.all and storing in a , b , c and then logging them so promise.all is equal to using await on each of the getjson function and then storing in a , b , c but the benefit is that all the requests will be initiated together and not one after another

// // console.log(a.name) //this is wrong , cuz a is array of objects , you should write like this 
// console.log(a[0].name)  //this gives the result 
// // console.log(b) //it will again give array of objects 
// // console.log(c)

// }

// loaddata()


// instead of Promise.all now we use , Promise.settled 

// function getjson(url){
//   return fetch(url).then((res)=>{ return res.json()}) //it won't return the value if you don't return the function 
// }

// or you can also write this function like this :

 async function getjson(url ){
      const res= await fetch(url)
      return await res.json() //this itself is a promise that is awaited 
}

// a little better version for error handling 
async function getjson(url) {
  try{
   const res = await  fetch(url );
   return  await res.json()
  }
  catch(error){
   return null ; 
  }

}

// or better version 


// async  function loadall(){
//  const result =  await Promise.allSettled([
//  getjson("https://jsonplaceholder.typicode.com/users") ,
//     getjson("https://jsonplaceholder.typicode.com/posts") ,
//     getjson("https://jsonplaceholder.typicode.com/todos") , 
//  ])

// const users = result[0]
// const posts = result[1]
// const todos = result[2]

// if (users.status==="fulfilled"){
//   console.log(users) //here you can also see the status 
//   // console.log(users.value)
// }

// else{
//   console.log("Users failed ")
// }

// }

// loadall()







///////////////////////////////////////////////////////////////

// return only fulfilled status and value 

// async  function loadall(){
//  const result =  await Promise.allSettled([
//  getjson("https://jsonplaceholder.typicode.com/users") ,
//     getjson("https://jsonplaceholder.typicode.com/posts") ,
//     getjson("https://jsonplaceholder.typicode.com/todos") , 
//  ])


//  for (let r in result){
//   if (result[r].status==="fulfilled"){
//     console.log("Status is fulfilled ")
//     console.log(result[r]) //it will return a huge output 
//     console.log(result[r].status)
//     console.log(result[r].value)

//   }
//   else{
//     console.log("status not fulfilled")
//   }
//  }


// }

// loadall()



// // improved version could be using for each loop 

// function getjson(url) {
//     return fetch(url)
//         .then((res) => res.json());
// }

// async function loadDashboard() {

//     const results = await Promise.allSettled([

//         getjson("https://jsonplaceholder.typicode.com/users"),

//         getjson("https://jsonplaceholder.typicode.com/posts"),

//         getjson("https://jsonplaceholder.typicode.com/todos")

//     ]);



//     results.forEach((result) => {

//         if (result.status === "fulfilled") {

//             console.log("SUCCESS:");
//             console.log(result.value);

//         } else {

//             console.log("failed");
//             console.log(result.reason);

//         }

//     });

// }

// loadDashboard();