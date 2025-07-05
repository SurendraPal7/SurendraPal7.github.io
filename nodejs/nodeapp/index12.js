import express from 'express';
const app = express();
const userRouter = express.Router();
const productRouter = express.Router();



app.listen(8000, () => {
    console.log("Server started on port 8000");
});
userRouter.get('/api/users/show', (req, res) => {
    res.send('users show endpoint!');
})
userRouter.post('/api/users/register',(req,res)=>{
    res.send('User registered successfully!');
})
userRouter.post('/api/users/login',(req,res)=>{
    res.send('User logged in successfully!');
});
productRouter.get("/api/products/show",(req,res)=>{
    res.send('products show endpoint!');
})
productRouter.delete("/api/products/:id",(req,res)=>{
    res.send('Product deleted');
})

app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
