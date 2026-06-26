

// const controller = new AbortController(); 
// // console.log(controller)

// // using the signal 

// url= "https://jsonplaceholder.typicode.com/users"
// // fetch(url , {
// //     signal : controller.signal
// // })
// // controller.abort()


// // program , getdata() and abort it after 1 second 


// async function getdata(url) {
//     try{
//         const res = await fetch(url , {
//             signal : controller.signal
//         })
//         const data = await res.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }


// }


// getdata("https://jsonplaceholder.typicode.com/users")
// setTimeout(() => {
//     controller.abort()
    
// }, 10); //if you do for 1000 then the response will be resolved before it is aborted 


///////////////////////////////////

let controller;

input.addEventListener("input", async (event) => {

    if (controller) {
        controller.abort();
    }

    controller = new AbortController();

    const response = await fetch(url, {
        signal: controller.signal
    });

});



//  One More Important Thing

// If you write the code like this:

try {
    const response = await fetch(url, {
        signal: controller.signal
    });

    const data = await response.json();

    console.log(data);

} catch (error) {
    console.log(error);
}

// Every cancelled request will enter the catch block.

// But is cancellation really an error?

// Not really.

// If the user typed another letter, you intentionally cancelled the previous request. That's expected behavior, not a bug.

// In professional code, developers usually distinguish an abort from a genuine network failure.

// catch (error) {

//     if (error.name === "AbortError") {
//         console.log("Request cancelled.");
//         return;
//     }

//     console.log("Real error:", error);

// }

// This pattern prevents your console or UI from treating normal cancellations as unexpected failures.





