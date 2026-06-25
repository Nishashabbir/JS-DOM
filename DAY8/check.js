

// fetch returns a promise that needs to be awaited , and same json returns a promise that needs to be awaited 


// async await 
// async function getdata() {
    
//     // const response = fetch("https://jsonplaceholder.typicode.com/users") //wrong 
//     // console.log(response) //this will give us the same promise stored in response const , becuase we didn't wait for it to resolve 
//     const response = await fetch("https://jsonplaceholder.typicode.com/users") 
//     // console.log(response) //it will give us response object as we waited for it to resolve 
//     // now we want to convert this response object in to json format 
//     // but we don't use the response directly to convert it into json as it its body is still a stream that will be parsed and read later on so we will wait for it using json that returns a promise 
//     // const data= await  response.json() //try it with and without await 
//     // console.log(data)
//     // or you can also use it in this way 
//     .then((res)=>res.json())
//     .then(console.log)
// }

// getdata()

// fetch -then 
// fetch("https://jsonplaceholder.typicode.com/users")
// // .then(console.log)  //.then automatically stores the resolved value of promise in the callback function , so we don't need to use await here as we are using then method to handle the promise resolution
// shorter way because .then() expects a function, and console.log is already a function that accepts an argument.
// .then((res)=>console.log(res))


// shorter version of fetch then  directly console.log

// const response= fetch("https://jsonplaceholder.typicode.com/users")
// .then(console.log(response))
// //  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },






// const response= fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json()) //this will return a promise that we can handle using then method 
// .then((data) => console.log(data)) //this will give us the data in json format as we handled the promise returned by json method



// const response = fetch("https://jsonplaceholder.typicode.com/users") //returns a promise goes to .then
// .then((res)=>res.json()) //returns a promise goes to next .then
// .then((data)=>console.log(data)) //this is logged after getting resolved 


// now write a function 

// async function getdata() {
//     try{
//         const url="https://jsonplaceholder.typicode.com/users"
//         const response = await fetch(url)
//         const data = await response.json()
//         .then(console.log) //.then requires a function , so you can either use any arrow function or simply log itself is a function 


//     }
    
//     catch(error ){
//         console.log("Error is: " , error)
//     }
// }
// getdata()


// is await always mandatory to be used with async function 
// no , you use it only when you want to pasuse otherwise asyncc can behave normally without await 

// async function getdata() {
//     return "hello" //it will automatically wrap it into promise
    
// }
// console.log(getdata()) //it will give promise in output as async returns promise 


// async function getdata() {
//     return Promise.resolve("hello" ) //it will automatically wrap it into promise
    
// }
// getdata() //it will return promise and then used by callback and get resolved 
// .then(console.log)  // resolved promise , output will be hello"



// using a resuable function for multiple requests 

async function getjson(url){
    return fetch(url).then((res)=>res.json())
}

// const final = await getjson("https://jsonplaceholder.typicode.com/users")
// console.log(final)


// promise.all to get the results after all the requests are completed 


// or you can create another function for that as well 

async function loader() {
    
const [a , b , c ] = await Promise.all([ getjson("https://jsonplaceholder.typicode.com/users"),
    getjson("https://jsonplaceholder.typicode.com/posts"),
    getjson("https://jsonplaceholder.typicode.com/todos")])

    console.log(a )
    console.log(b )
    console.log(c )
}
loader() 


// promise.allsettled 

// we use it for better version instead of promise.all as it will give us the result of all the promises even if some of them are rejected and we can handle them accordingly

async function loader() {
    const [a , b , c ] = await Promise.allSettled([ getjson("https://jsonplaceholder.typicode.com/users"),
        getjson("https://jsonplaceholder.typicode.com/posts"),
        getjson("https://jsonplaceholder.typicode.com/todos")])
    }

    // or instead of using multiple variables in list we can simply do this 


async function loader() {
    const result = await Promise.allSettled([ getjson("https://jsonplaceholder.typicode.com/users"),
        getjson("https://jsonplaceholder.typicode.com/posts"),
        getjson("https://jsonplaceholder.typicode.com/todos")])
        console.log(result)
    }
    // get one result one by one 
    console.log(result[0].value) //gives the value of first promise
    console.log(result[1].value) //gives the value of second promise
    console.log(result[2].value) //gives the value of third promise  
    

    // return only fullfilled status 

    
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

    // for better version you can use the for each loop as well 
    //   results.forEach((result) => {

//         if (result.status === "fulfilled") {

//             console.log("SUCCESS:");
//             console.log(result.value);

//         } else {

//             console.log("failed");
//             console.log(result.reason);

//         }

//     });

// }
