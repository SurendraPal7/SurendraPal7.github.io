import express from "express";
const Router = express.Router();

Router.get('/show', (req, res) => {
    res.send('users show endpoint!');
})
Router.post('/register',(req,res)=>{
    res.send('User registered successfully!');
})
Router.post('/login',(req,res)=>{
    res.send('User logged in successfully!');
});

export default Router;