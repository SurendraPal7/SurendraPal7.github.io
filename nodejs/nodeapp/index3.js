import express from 'express';
const app = express();
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// app.get('/user', (req, res) => {
//   res.send('Hello, User!');
// });

// app.get('/ab*cd', (req, res) => {
//   res.send('Hello!');
// });

// app.get("/products",(req, res) => {
  
//   res.status(201).json({name: "Product 1", price: 100});
// });

// app.get("/products",(req, res) => {
//   const products=[
//     {id:1,name:"Product 1",price:140},
//     {id:2,name:"Product 2",price:150},

//     {id:3,name:"Product 3",price:160},
//     {id:4,name:"Product 5",price:140},


//   ]
//   res.json(products);
// });


app.get("/products/:id",(req, res) => {
  const products=[
    {id:1,name:"Product 1",price:140},
    {id:2,name:"Product 2",price:150},

    {id:3,name:"Product 3",price:160},
    {id:4,name:"Product 5",price:140},


  ]
  const pid=req.params.id;
  const product=products.find((p)=>p.id==pid);
  if(product){
    res.json(product);
    }
    else{
      res.status(404).json({error:"Product not found"});
    }
});



// app.get("/student/:name/age/:age",(req,res)=>{
//   res.send(req.params.name+req.params.age);
// })

// app.get("/:name",(req,res)=>{
//   res.send("hello");         // This will match any path like /anything
//   // res.send(req.params.name); // This will send the name parameter from the URL
// })


// app.get("/name",(req,res)=>{
//   res.send("hello"); // This will match the exact path /name
// }) 



// app.get("/student/:name/:age",(req,res)=>{
//   res.send(req.params.name+req.params.age);
// })

// app.get("/:name/:age",(req,res)=>{
//   res.send(req.params.name+req.params.age);
// })

// app.get("/",(req,res)=>{
//   res.send("Hello from server");
// })


// app.get("/",(req,res)=>{
//   res.send(req.headers.authorization);
// })


// app.get('/',(req,res)=>{
//   res.send(req.query.name+req.query.age)
// })