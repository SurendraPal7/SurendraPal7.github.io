import express from 'express';
import userRouter from './userRoutes.js';
import productRouter from './productRoute.js';
const app = express();


//this file is related to productRoute and userRoutes

app.listen(8000, () => {
    console.log("Server started on port 8000");
});



app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
