//@ts-nocheck

const renderMessage = (socketId, data) => {
  const div = document.createElement("div");
  let claasName;
  let html;
  if (data.id) {
    className = socketId === data.id
        ? "my-messages.comtainer"
        : "other-messages-container";
    if (claasName === "my-messages-container") {
      html = `<div class="my-messages">
      <span><b>yo</b>${data.time}</span><br/>
      <span>${data.text}</span>
      </div>`;
    } 
    else {
      html = `<div class="other-messages">
      <span><b>${data.username}</b>${data.time}</span><br/>
      <span>${data.text}</span>
      </div>`;
    }
  } 
  else {
    className = "bot-messages";
    html = `<b>Shut Bot dice </b><i>${data.text}</i>`;
  }
  div.classList.add(className);
  div.innerHTML = html;
  document.getElementById('messages').appendChild(div)
};
const renderMessages = (data) => {const html = data.map((elem) => {let fragment = `<div class="other-messages-container"><div class="other-messages"><span><b>${elem.username}</b> ${elem.time}</span><br /><span>${elem.text}</span></div></div>`;return fragment;}).join('\n');document.getElementById('messages').innerHTML = html;};


const chatForm = document.getElementById("chat-form")
const textInput = document.getElementById("text-input")


const socket = io()


const{username}= Qs.parse(window.location.search,{
  ignoreQueryPrefix:true
})


socket.emit('join-chat',{username})


chatForm.addEventListener('submit',(evento)=>{
  evento.preventDefault();


  const msg= textInput.value
  socket.emit('new-message',msg)
  textInput.value=""
})

socket.on("chat-message", (data)=>{
  renderMessage(socket.id,data)
})

socket.on('messages',(data)=>{
  renderMessages(data)
})