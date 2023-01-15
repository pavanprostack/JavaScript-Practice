//Async-Await
// Async & Await make promises easier to write.
// Async :- it makes function return a promise.
// await :- it makes function wait for a promise.

function step1(value, error){
    return new Promise((resolve, reject)=>{
        if(!error){
            resolve(value+10)
        }else{
            reject("Something went wrong")
        }
    })
}

async function result(){
    let result1= await step1(10, false)
    return result1
}
async function result2(){
    let result = await Promise.resolve(5);
    return result
    
}
// console.log(result2()).
result().then((response)=>console.log(response))
result2().then((response)=>console.log(response))