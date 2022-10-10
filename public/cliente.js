const socket =io()

socket.on('server-message',(data)=>{
console.log("recibido mensaje del server")
console.log(data)
})