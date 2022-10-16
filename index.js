const express = require('express')
const{Server: HttpSever}= require('http')
const{Server: SocketServer}= require('socket.io')


const PORT = process.env.PORT || 8080
const app= express()
const httpSever = new HttpSever(app)

const Productos = require('./controller/metodosProductos')
const path = require('path')
const productos = new Productos()


app.set ('views', './views')
app.set('view engine', 'ejs')

/* app.use(express.static(path.resolve(__dirname,'./public'))) */
app.use(express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({ extended:false}))



app.get('/',(req,res)=>{
  res.render('index',{listaDeProductos: true, productos:productos.getAll()})
});

app.post('/',(req,res)=>{
  console.log(req.body)
  productos.save(req.body)
  res.redirect('/')
})

const connectedServer = httpSever.listen(PORT,()=>{
  console.log(`servidor activo en el puerto ${PORT}`)
})

const io = new SocketServer(httpSever)

connectedServer.on('error',()=>{
  console.log("errorrr pez")
})

const mensajes = []


io.on('connection', socket => {
  console.log('Nuevo cliente conectado!')

  /* Envio los mensajes al cliente que se conectó */
  socket.emit('mensajes', mensajes)

  /* Escucho los mensajes enviado por el cliente y se los propago a todos */
  socket.on('mensaje', data => {
      mensajes.push({ socketid: socket.id, mensaje: data })
      io.sockets.emit('mensajes', mensajes)
  })
})
