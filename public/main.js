//@ts-nocheck
const socket =io()

//join chat

const { username } = Qs.parse(window.location.search, {ignoreQueryPrefix: true})

socket.emit('join-chat',{username})