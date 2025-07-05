const name=process.argv[2] || "Guest";
const name2=process.argv[3] || "User";


console.log(`Hello ${name} and ${name2}, welcome to the Node.js application!`);


import express from 'express';
const app = express();
const port=process.argv[2]||8080;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    });

