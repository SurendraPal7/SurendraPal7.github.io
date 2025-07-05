/*import express from "express";
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
        token= token.split(" ")[1]; 
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



app.post("/register",(req,res)=>{
    const {name,email,password,role} = req.body;
    const hashedPwd = bcrypt.hashSync(password, 10);
    const user={
        name,
        email,
        password:hashedPwd,
        role
    }
    users.push(user);
    res.json(user8);

})


*/
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const app = express();
const SECRET = "sometext";
app.listen(8080, () => {
  console.log("Server started");
});
let users = [];
app.use(express.json());

const authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    next();
  } catch (err) {
    return res.json({ message: "Access Denied" });
  }
};

const authorize = (role) => {
  return (req, res, next) => {
    if (req.role === role) {
      next();
    } else {
      return res.json({ message: "Unauthorized Access" });
    }
  };
};

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const found = users.find((user) => user.email === email);
  const matchPass = await bcrypt.compare(password, found.password);
  if (matchPass) {
    const token = jwt.sign(found, SECRET, { expiresIn: "1h" });
    res.status(200).json({ user: found, token });
  } else {
    res.status(400).json({ message: "Access Denied" });
  }
});

app.get("/users", authenticate, authorize("admin"), (req, res) => {
  res.json(users);
});

app.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedpwd = await bcrypt.hash(password, 10);
  const user = {
    name,
    email,
    password: hashedpwd,
    role,
  };
  users.push(user);
  res.json(user);
});