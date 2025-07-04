import express from "express";
import jwt from "jsonwebtoken";
const app = express();
const SECRET = "sometext";
app.listen(8000, () => {
  console.log("Server started");
});
const users = [
  {
    name: "John",
    email: "john@email.com",
    password: "1234",
    role: "user",
  },
  {
    name: "Cathy",
    email: "cathy@email.com",
    password: "1234",
    role: "admin",
  },
];
app.use(express.json());


const authenticate=(req,res,next)=>{
    // res.json({message:"Access Denied"});
    try{
         let token = req.headers.authorization;
    token= token.split(" ")[1]; // Bearer token
    const decoded = jwt.verify(token, SECRET);
    req.role=user.role;
           next();


    }
    catch(err){
        res.status(401).json({message:"Access Denied"});
        return;
    }
}

//authentcation for admin so that only admin can access the user data
const adminAuthenticate=(req,res,next)=>{
    try{
        let token = req.headers.authorization;
        token= token.split(" ")[1]; // Bearer token
        const decoded = jwt.verify(token, SECRET);
        if(decoded.role==="admin"){
            next();
        }
        else{
            res.status(401).json({message:"Access Denied"});
            return;
        }
    }
    catch(err){
        res.status(401).json({message:"Access Denied"});
        return;
    }
}



app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const found = users.find(
    (user) => user.email === email && user.password === password
  );
  if (found) {
    const token = jwt.sign(found, SECRET);
    res.status(200).json({ user: found, token });
  } else {
    res.status(400).json({ message: "Access Denied" });
  }
});



app.get("/user",authenticate,(req,res)=>{
    res.json(users)
})

