//objects
// const student={
//     name:"John",
//     age:20,

// };
// console.log(student);
// console.log(student.name)
// console.log(student["name"]);
// student.city="Amrisar";
// console.log(student);
// student.city="Lucknow";
// console.log(student);

// delete student.age;
// console.log(student);

// const keys= Object.keys(student);
// console.log(keys);

// const keys= Object.values(student);
// console.log(keys);


const cart={
    1:5,
    3:1,
    5:2,

};
const newCart = ({...cart,2:9,4:6})
console.log(newCart);
const items= Object.keys(cart).length
console.log(items);

// cart[3]=2
cart[3]=cart[3]+1;
console.log(cart);
cart[3]=cart[3]-1;
console.log(cart);