
// task //////////////////////////////////

// function getNumber(){
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             resolve(10)
//         }, 2000);
//     })
       
// }

// async function  showNumber(){
//    const result = await getNumber() //if you store it without braces , it won't bother even to show the result but will store the same function definition 
//    console.log(result)

// }

// showNumber()

// old way was writing this , but infact in async await js is internally doing this  : 
// getNumber()
//   .then((num)=>{
// console.log(num)
// })
// learnt 
// async returns promise
// await extracts resolved value
// async/await is promise syntax underneath




// task ///////////////////////////////

function getUser(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({id: 1 , "name" : "Ali"})
        }, 1000);
    })
}

function getorders(id){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(["order1" , "order2" , "order3"])
        }, 1000);
    })
}

async function processdata() {
    const user = await getUser() //it will resolve an object stored in user 
    const Orders = await getorders(user.id)
    console.log(Orders)//provides a list 
    console.log(Orders[0]) //provides a first order 
    
}

processdata()

