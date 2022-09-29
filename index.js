const express = require('express')
const{Server: HttpServer}= require('http')
const{Server: SocketServer}= require('socket.io')

const PORT = process.env.PORT || 8080;
const app= express();

app.use(express.static("./public"))

const httpServer = new HttpServer(app)

httpServer.listen(PORT,()=>{
    console.log(`Puesto ${PORT} activo`)
})

const io = new SocketServer(httpServer)
io.on('connection',()=>{
    console.log("se conecto un usuario")
})