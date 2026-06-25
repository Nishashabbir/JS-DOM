

// most important program of DAY8



//  async function retry(url , tries){

// for (let i=0 ; i<tries ; i++){

// try{
//      const res = await fetch(url)
//      if (!res.ok){ //here .ok is built in property of fetch api which returns true if the response is successful and false if not
//         // console.log("Request failed ")
//         throw new Error("Request failed ")
//      }
//      else{
//         return  await res.json(); //it also returns a promise so must await here as well 
//      }
    
// }
// catch(error){
//         // return null ; //this is the most culprit line as it destroys the concept of function , return means exit the function , but at firs request failure we can't immediately exit the program , rather we should keep trying 
//     console.log(`the request ${i+1}:  fails`) //better use this in program 
//     }
// }
// // if that whole block fails then you can do this : 

// throw new Error("All requests failed ")

// }

//  retry("https://jsonplaceholder.typicode.com/users" , 5)

// //  so basically program works fine , but it doesn't print anything as we just returned the data but didn't use it 

// // the correct way to use it is : 
// (async () => {
//   try {
//     const data = await retry( 
//       "https://jsonplaceholder.typicode.com/users",
//       5
//     );

//     console.log(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// })();






// take 2 

async function retry(url , tries) {

for(let i=0 ; i<tries ; i++ ){
  try {
    const response= await fetch(url);
    if (!response.ok){
      throw new Error(`The request is failed ${i+1 } time`);
      
    }
    else{
      return await response.json()
    }


  } catch (error) {
    console.log("Error is : " , error)
    
  }


}

  
}

retry("https://jsonplaceholder.typicode.com/users" , 3)


async ()=>{
try{
const data =   await retry("https://jsonplaceholder.typicode.com/users" , 5)
console.log(data)
}
catch(error){
  console.log("error is : " , error )
}

}