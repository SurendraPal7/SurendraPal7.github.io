import bcrypt from 'bcrypt';
// const pwd="password";
// const hashedPwd = await bcrypt.hash(pwd, 10);
// console.log(hashedPwd);


const check=await bcrypt.compare("password","$2b$10$1WFXxrLVt3nF8zhm.e1x1.iUlGskXMY8oXO4ryjSYHL4px2LUKZKG" );
console.log(check); // true