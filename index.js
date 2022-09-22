const path = require('path')
const rutasApi = require('./routers/index')
const express = require('express')
const Productos = require('./model/productos')

const app= express()
const PORT = process.env.PORT || 8080
const productos = new Productos()


app.set ('views', './views')
app.set('view engine', 'pug')

app.use(express.static(path.resolve(__dirname,'./public')))

app.get('/', (req,res)=>{
  res.render('index',{showList:true, productos:productos.getAll()})
})

app.get('/datos', (req,res)=>{
  res.render('main',req.query)
})

/* app.user ('/api', rutasApi)
 */


const connectedSever = app.listen(PORT,()=>{
  console.log (`servidorr activo en ${PORT}`)
})

connectedSever.on ('error', (error)=>{
  console.log(error.message)
})