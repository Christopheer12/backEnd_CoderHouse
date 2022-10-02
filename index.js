const express = require('express')
const{Server: HttpServer}= require('http')
const{Server: SocketServer}= require('socket.io')
const PORT = process.env.PORT || 8080;
const app= express();

const httpServer = new HttpServer(app)
const io = new SocketServer(httpServer)


const messages=[
    {author:"Juan",text:"Hola, ¿que tal?"},
    {author:"Pedro",text:"Muy bien, ¿y vos?"},
    {author:"Ana",text:"Genial"}
]


//middlewares
app.use(express.static("./public"))


//Routes

//Listen

httpServer.listen(PORT,()=>{
    console.log("Server on in port",PORT)
})

//Socket Events
io.on('connection',(socket)=>{
console.log("new client connection")
console.log(socket.id)
socket.emit('messages',[...messages])
})
