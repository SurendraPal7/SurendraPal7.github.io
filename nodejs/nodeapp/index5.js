import express from 'express';
const app=express();
app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})

app.use(express.json());

let products=[]

app.post('/',(req,res)=>{
    // const{id,name,price}=req.body;
    // const obj={
    //     id,
    //     name,
    //     price,
    // };
    products.push(req.body);
    res.json({message:"Product added successfully"});
    // res.json(req.body);
});

app.get('/',(req,res)=>{
    res.json(products);
}
);

//to delete products
app.delete('/:id',(req,res)=>

{
    const pid=req.params.id;
    products=products.filter((product)=>product.id!=pid);
    res.json({message:"Product deleted successfully"});
});
