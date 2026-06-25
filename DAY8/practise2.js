

// fetch returns a promise that needs to be awaited , and same json returns a promise that needs to be awaited 

async function getdata() {
    
    // const response = fetch("https://jsonplaceholder.typicode.com/users") //wrong 
    // console.log(response) //this will give us the same promise stored in response const , becuase we didn't wait for it to resolve 
    const response = await fetch("https://jsonplaceholder.typicode.com/users") 
    // console.log(response) //it will give us response object as we waited for it to resolve 
    // now we want to convert this response object in to json format 
    // but we don't use the response directly to convert it into json as it its body is still a stream that will be parsed and read later on so we will wait for it using json that returns a promise 
    const data= await  response.json() //try it with and without await 
    console.log(data)
}

getdata()

//  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },