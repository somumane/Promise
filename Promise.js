// The Promise Object Represents the eventual complition(or failure) of an asynchronous
//-- Operation and its result value

/* Promise three states
pending: initial State , neither fulfiled nor rejected
fulfilled:meaning that the operation was completed success
rejected:meaning That operation failed
*/
//Promise One
const PromiseOne=new Promise((resolve, reject) => {
    //Do any async task
    //DB calls Network Calls
    setTimeout(()=>{
        console.log("ansync task is completed")
        resolve() //resolve conect to .then
    },1000)
})

// Promise Consumation
// when you call back resolve then consumtion connected to then
PromiseOne.then(function(){
    console.log("Promise Consumed")
})

// this is promise2
new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("async task is completed 2")
        resolve()// use to connect then
    },1000)
}).then(()=>{
    console.log('Promise Consumed 2')
})

// Passing Parameters insaide resolve

new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username:"Somu",age:22,id:"1234somu"}) // you pass any thing here you get insaide then
    },1000)
}).then((data)=>{
  console.log(data)
})

// Error geting when err is true output will be ERROR when false you get name 
new Promise((resolve, reject) => {
    setTimeout(()=>{
        let err=false
        if(!err){resolve({name:"somu",age:18})}
        else{ reject("ERROR") }
    },1000)
})
.then((data)=>{
 console.log(data.name);
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{     //Your Task is Completed
console.log("Promise is Resoloved or Rejected")
})

//Promise Five not only then catch use async also use try catch

const PromiseFive=new Promise((resolve, reject) => {
    setTimeout(()=>{
        let err=true
        if(!err){resolve({name:"somu",age:18})}
        else{ reject("ERROR") }
    },1000)
})
 async function consumePromise(){
  try{
    const response= await PromiseFive
   console.log(response.age)
}
   catch(err){
   console.log(err)
   }
}
consumePromise()



// Using fetch to async fetch is returns direct promise fetch is one object of JS

async function getAlluser(){
   try{ let response=await fetch("https://jsonplaceholder.typicode.com/users")
    const data= await response.json() // its take time to convert json thats why await added
    console.log(data)} 
    catch(error){
        console.log(error)
    }
}
//getAlluser()

// Using fetch then catch
// Almost Fetch then catch is using to call apis
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})