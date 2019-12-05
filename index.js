const express=require('express');
const app=express();
const http= require("http").createServer(app);
const socket=require("socket.io");
const io=socket(http);

io.on('connection',(mySocket)=>{
    console.log("Socket connected");
    mySocket.on('myMsg',(msg)=>{
        console.log(msg);
        io.sockets.emit('myMsg',msg);
    });
    mySocket.on('disconnect',()=>{
        console.log("Socket Disconnected");
    });
});

app.get('/',(request,response,next)=>{
    response.sendFile(__dirname+"/index.html");
});


http.listen(9000,()=>{
    console.log("Server Running...!!!");
});