import http from 'http'
const server = http.createServer((req,res)=>{
    res.end("Good morning");
});

server.listen(8000,()=>{
    console.log("Server Started");
})