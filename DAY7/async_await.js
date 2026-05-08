
// ASYNC AWAIT  guidelines are there in guide.txt
// before we had this way : 

function test(){
    return new Promise((resolve)=>{
        resolve(5)
    })
}

// we had to make a promise statement and resolve to actually return a value of an async function 

// but now instead of returning a new promise , we will write async with the function which automatically returns a promise 
// like here : 

async function test() {
    return 5 
}
// now this function doesn't return 5 immediately , it returns a promise to return 5 after resolving , this is what js does internally like hidden way of returning promise , so we no longer need to worry about the returning of promise 

// now how will we call it just like before 
test()
  .then /// but instead of calling then again and again  .then we have another way better than this 


// //we can use await with the function like that 
function getUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Ali");
    }, 2000);
  });
}

async function displayUser() {

  const user = await getUser();

  console.log(user);

}

displayUser()  //here ALi will be printed out 


// // wrong mindset here if ////////////////////////////////////////

async function fetchdata(){
     setTimeout(() => {
        console.log("data fetching")
     }, 2000);

}

async function getdata(){
    x= await fetchdata()
    console.log("the data has been fetched ")
}

getdata() //it prints wrong sequence 

// here : actually behaves like:

function fetchdata() {
    setTimeout(() => {
        console.log("data fetching")
    }, 2000);

    return Promise.resolve(undefined);
}

// Notice what happens:
// setTimeout is scheduled
// function immediately finishes
// Promise resolves instantly

// So:
// waits for an already-resolved Promise.
// Meanwhile the timer is still chilling in the event loop like:
// “Bro relax, I’ll run after 2 seconds.”
// The Real Issue
// setTimeout is callback-based, not Promise-based.
// JavaScript cannot track when this finishes:
// because setTimeout itself returns a timer ID, not a Promise.

// 1. fetchdata starts
// 2. setTimeout registered
// 3. fetchdata ends immediately
// 4. Promise resolves immediately
// 5. await finishes
// 6. "done" prints
// 7. after 2 sec → "data fetching"



// real program goes like this 
// the concept is still the same , you have a function get user will take time and when it finishes you want another function  to execute so you will better await that function instead of going into a callback hell  

 function getuser(){
    return new Promise((resolve)=>{ //no async with it , as it already has a promis 
setTimeout(() => {
    
 resolve("Nisha kindly do it for me ")

}, 3000);
    })
   
}

//  async function fetchdata(){ //this function will return a promis so async with it , only async and await are necessary for both 
//     const user = await getuser() 
//     console.log(user)
    
// }

// fetchdata()

// this works fine 





////////////////////////////////one more for practise 

// // a wrong function here , because it never resolved , 
function delay(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            // console.log("i was delayed")
            //you never called resolve here , call it like this 
            resolve()
            // resolve("i was delayed ")
            
        }, 2000);
    })
}

const user = async ()=>{
    await delay();
    return "data"
};

console.log(await user())

// note : 
// Inside async function:
// return "data";

// is secretly:

// return Promise.resolve("data");
//  So why no string printed?
// Because you are doing:
// console.log(user)
// instead of:
// console.log(await user())
// or:
// user().then(console.log)


function add(a , b){
    return (a+b)
}

// add(2,3)
// console.log(add(2,3))
x=add(2,3) //here we are storing the result of a function after calling it 
console.log(x) //printing x 

// buttttttttttt
const x=function add(a , b){ //and here we are storing a function's definition in x so it is again a function now , so we have to call x as a function when we want to print the result to use the function 
    return (a+b)
} 
console.log(x(2,3)) //calling x 


function delay(ms){
    return new Promise((resolve)=>{
      setTimeout(resolve , ms); //we can also resolve inside it like that  simply
      console.log("A")
    })
}


async function test() {
    await delay(1000)
    console.log("B")
    
}

await test(); 
console.log("C") //this brings different result 
// //  test();//and  this brings different results as well 
console.log("C")
// if you want the next code to wait , then write await but this is not a good way you must write a function becuase await usually works inside the function 



