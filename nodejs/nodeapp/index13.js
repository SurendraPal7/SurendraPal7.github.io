import express from 'express';
import mongoose, { Model } from 'mongoose';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'; 
const SECRET="Something"
const app= express();
mongoose.connect('mongodb://localhost:27017/lpu').then(()=>{
    app.listen(8000,()=>{
        console.log("Server started on port 8000");
    });
});


const userSchema= new mongoose.Schema({
    username:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
    role:{type:String,default:"user"}

},{timestamps:true}
);
app.use(express.json());

const userModel=mongoose.model('Users',userSchema);

app.post('/register',async(req,res)=>{
    try{

    
    const {username,email,password} =req.body;
    const hashpwd = await bcrypt.hash(password, 10); 
    const user={
        username,
        email,
        password:hashpwd,
    };

    const result= await userModel.create(user);
    res.status(200).json(result);
}
catch(err){
    console.log(err);
    res.status(500).json({message:"Something went wrong!"});
}

})

app.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body;
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            const ismatch= await bcrypt.compare(password, existingUser.password);
            if(ismatch){
                //  const { username, role } = existingUser;
                const userobj={username:existingUser.username,email,role:existingUser.role};
                const token =jwt.sign(userobj,SECRET,{expiresIn:'1h'});
                res.status(200).json({user:userobj,token});
            }
            else{
                res.status(400).json({message:"Invalid credentials"});
            }
        }
        else{
            res.status(400).json({message:"User not found"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong"});
    }

        

})

// app.post("/update/:email",async(req,res)=>{
//     try{
//         const {email}=req.params;
//         const {username,password,role}=req.body;
//         //i only want change roll user to admin
//         if(role && role!=="admin"){
//             return res.status(400).json({message:"You can only change role to admin"});
//         }
//         const existingUser = await user00000 
        
        

//     }
// });