//@ts-nocheck
const socket = io();

const renderMessages = (data) => {
  const html = data
    .map((elem) => {
      let fragment = `<div class="other-messages-container"><div class="other-messages"><span><b>${elem.username}</b> ${elem.time}</span><br /><span>${elem.text}</span></div></div>`;
      return fragment;
    })
    .join("\n");
  document.getElementById("messages").innerHTML = html;
};

//join chat

const { username } = Qs.parse(window.location.search, {
  ignoreQueryPrefix: true,
});

socket.emit("join-chat", { username });

socket.on("chat-message", (data) => {});
