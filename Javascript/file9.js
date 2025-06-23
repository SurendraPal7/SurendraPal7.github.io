//arrays
// const score = [2,1,7,5,3];
// console.log(score)
// console.log(score[0]);

// score.push(9);
// console.log(score);
// console.log(score.length)

// const newScore= [...score,9];
// console.log(newScore);
// let cart={};
//  const products = [
//     { id: 1, name: "Product 1", price: 10 },
//     { id: 2, name: "Product 2", price: 20 },
//     { id: 3, name: "Product 3", price: 30 },
//  ];
// //  console.log(products[0]);
// const newProducts=[...products,{id: 1, name: "Product 1", price: 10 }]

// function addToCart(id){
//     cart={...cart,[id]:1};

// }
// function incrementItem(id) {
//     cart = {
//         ...cart,
//         [id]: (cart[id] || 0) + 1
//     };
// }

// // Decrement item quantity
// function decrementItem(id) {
//     if (cart[id]) {
//         const newQuantity = cart[id] - 1;

//         if (newQuantity > 0) {
//             cart = {
//                 ...cart,
//                 [id]: newQuantity
//             };
//         }}}
// addToCart(1);
// addToCart(3);
// console.log(cart);




// 
const score = [2,1,7,5,2];
// score.forEach((value,index,arr)=>{
    // score.forEach((value)=>{

    //     console.log(value);

//         score.forEach((a,b,c)=>{
//             console.log(c[b]);
// })

// score.map((val)=>{
//     console.log(val)
// })

// const newScore= score.map((value)=>{
//     return value+5;

// });
// console.log(newScore);




// const newScore = score.map((value)=>{
//     return value>2;

// });
// // console.log(newScore);


// const newScore = score.filter((value)=>{
//     return value>2;

// });
// console.log(newScore);


// const newScore = score.find((value)=>{    //it will match the first value which so ever will be the first match
//     // return value>2;
//     return value==2;

// });
// console.log(newScore);


// const newScore = score.filter((value)=>{    //it will give all match match  till the end of the array

//     return value==2;

// });
// console.log(newScore);


// const newScore = score.reduce((sum,value)=>{    //it will give all match match  till the end of the array

//     return sum+value;

// },0);   //0 means intializing sum with 0;
// console.log(newScore);



const newScore = score.reduce((sum,value)=> sum+value,0);  //it will give all match match  till the end of the array
   //0 means intializing sum with 0;
console.log(newScore);






// score.forEach((value)=>{
//     return value+50;
// })
// console.log(score);
