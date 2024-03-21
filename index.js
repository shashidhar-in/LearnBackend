// let x=100;
// let y=200;

// console.log(x);


// const add=(x,y)=>{
// console.log(x+y);
// }

// setTimeout(()=>{
//     console.log('1')
// },1000)
// setTimeout(()=>{
//     console.log('2')
// },2000)

// async function fetchData(){
//     const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data=await response.json()
//     console.log(data)
// }

// fetchData()

const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Success')
    },2000)
})

promise.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

