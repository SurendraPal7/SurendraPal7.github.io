//promises


// function f1(){
//     return 5;
//     // setTimeout(() => {
//     //     return 5;    // function delayed by 1sec
        
//     // }, 1000);
// }


// function f1(){
//     return new Promise((resolve, reject) => {
//         // resolve(5);
//         reject("Something went wrong");
//     })
    
// }

// function f2(x){
// console.log(x+7)
// }
// // const n= f1()
// // const result = f2(n);
// // console.log(result);

// f1()
// .then((n)=>f2(n))
// .catch((err)=>console.log(err));



// function f1(n){
//     return new Promise((resolve, reject) => {
        
//         if(n>=0){
//             resolve(n);
//         }
//         else{
// reject("Invalid input");
//         }
        
//     })
    
// }

// function f2(x){
// console.log(x+7)
// }
// f1(-5)
// .then((n)=>f2(n))
// .catch((err)=>console.log(err));



// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((data)=>{
//     data.map(value=>{
//         console.log(value.name,value.email)
//     })
// })
// .catch((err)=>console.log()); 




const fetchData=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    data.map(value=>{
        console.log(value.name,value.email)
    })


};
fetchData();