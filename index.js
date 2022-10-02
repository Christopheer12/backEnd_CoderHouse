const express = require('express')
const{Server: HttpServer}= require('http')
const{Server: SocketServer}= require('socket.io')
const PORT = process.env.PORT || 8080;
const app= express();

const httpServer = new HttpServer(app)
const io = new SocketServer(httpServer)


<<<<<<< HEAD
const messages=[
    {author:"Juan",text:"Hola, ¿que tal?"},
    {author:"Pedro",text:"Muy bien, ¿y vos?"},
    {author:"Ana",text:"Genial"}
]
=======
app.set ('views', './views')
app.set('view engine', 'ejs')

app.use(express.static(path.resolve(__dirname,'./public')))
app.use(express.json())
app.use(express.urlencoded({ extended:false}))
/* app.get('/', (req,res)=>{
  res.render('index',{showList:true, productos:productos.getAll()})
}) */


/* app.get('/datos', (req,res)=>{
  res.render('main',req.query)
}) */
>>>>>>> master


//middlewares
app.use(express.static("./public"))

<<<<<<< HEAD
=======

app.get('/',(req,res)=>{
  res.render('index',{listaDeProductos: false, productos:productos.getAll()})
});
>>>>>>> master

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
