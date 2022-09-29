const socket =io()

const input = document.querySelector("#chat-input")
input.addEventListener('input',()=>{
    socket.emit('message',input.value)
})


socket.on('server-message',(data)=>{
    document.querySelector("#chat-box-message").innerHTML=data
})