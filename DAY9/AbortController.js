

const controller = new AbortController(); 
// console.log(controller)

// using the signal 

url= "https://jsonplaceholder.typicode.com/users"
// fetch(url , {
//     signal : controller.signal
// })
// controller.abort()


// program , getdata() and abort it after 1 second 


async function getdata(url) {
    try{
        const res = await fetch(url , {
            signal : controller.signal
        })
        const data = await res.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }


}


getdata("https://jsonplaceholder.typicode.com/users")
setTimeout(() => {
    controller.abort()
    
}, 10); //if you do for 1000 then the response will be resolved before it is aborted 