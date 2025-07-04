import express from 'express';
const app = express();
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

const logger=(req,res,next)=>{
    req.msg="Hello!";
    next();
}
app.use(logger);    




app.get("/",(req,res)=>{
    res.send(req.msg+", world!");
})


app.get("/p",logger,(req,res)=>{    //this will only work for products route
    res.send(req.msg+ " Product")
})

// const auth=(req,res,next)=>{
//     // const name=req.params.name;   //we can also use this
//     if(req.params.name=="John"){
//         req.msg="Hello John";
//         next();
        
//     }
//     else{
//         res.send("Access denied");
//     }
    
// }

// app.get("/:name",auth,(req,res)=>{
//         res.send(req.msg+" Access granted");
    
    
// })


