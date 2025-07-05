import express from 'express';
const app = express();
const userRouter = express.Router();
const productRouter = express.Router();


app.listen(8000, () => {
    console.log("Server started on port 8000");
});
app.get('/api/users/show', (req, res) => {
    res.send('users show endpoint!');
})
app.post('/api/users/register',(req,res)=>{
    res.send('User registered successfully!');
})
app.post('/api/users/login',(req,res)=>{
    res.send('User logged in successfully!');
});
app.get("/api/products/show",(req,res)=>{
    res.send('products show endpoint!');
})
app.delete("/api/products/:id",(req,res)=>{
    res.send('Product deleted');
})