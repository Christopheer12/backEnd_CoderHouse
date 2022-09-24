const path = require('path')
const express = require('express')
const Productos = require('./model/productos')

const app= express()
const PORT = process.env.PORT || 8080
const productos = new Productos()


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

app.get('/',(req,res)=>{
  res.render('index',{listaDeProductos: false, productos:productos.getAll()})
});

app.post('/',(res,req)=>{
  productos.save(req.body)
  res.redirect('/')
})












/* app.user ('/api', rutasApi)
 */


const connectedSever = app.listen(PORT,()=>{
  console.log (`servidorr activo en ${PORT}`)
})

connectedSever.on ('error', (error)=>{
  console.log(error.message)
})