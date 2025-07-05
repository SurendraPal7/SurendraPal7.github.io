import express from "express";
const Router = express.Router();

Router.get("//show",(req,res)=>{
    res.send('products show endpoint!');
})
Router.delete("/:id",(req,res)=>{
    res.send('Product deleted');
})

export default Router;