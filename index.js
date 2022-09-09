// https://glitch.com/edit/#!/expresscoderhouse?path=server.js%3A21%3A2
 
const express = require('express');
const fs = require('fs')

const productos =JSON.parse(fs.readFileSync('./Productos.json','utf-8'))
const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.json())


app.get('/',(req, res, next)=>{
    res.send(`<h1>Esto es el inicio de la pagina, para arancar nodemon se usar : npm rum start-dev</h1> 
    <h2>Rutas disponibles</h2>
    <li>/productos (?price= y el precio a colocar, ejemplo /productos?price=150)</li>
    <li>/productos/:id</li>`)
})
app.get('/productos', (req,res,next)=>{
    console.log(req.query)
    const{price = 99999999 } = req.query;
    
    const priceNumber =+(price)
    const resProductos = productos.filter((producto)=> producto.price <priceNumber
);
    res.json(resProductos)

})







app.get('/productos/:id', (req,res,next)=>{
    console.log(req.params)
    const{id} =req.params
    const producto = productos.find((producto) => producto.id===+(id))
res.json(producto)
})

app.post('/productos',(req,res,next)=>{
    console.log(req.body);
    const{  price,id,title} = req.body
    const nuevoProducto ={
        title,
        price,
        id:productos.length+1,
    }
    productos.push(nuevoProducto)
    fs.writeFileSync('./Productos.json',JSON.stringify(productos, null,2))
    res.json(nuevoProducto)
})
app.delete('/productos/:id',(req,res,next)=>{
const{id}=req.params
const indiceProducto = productos.findIndex((producto)=> producto.id === +(id))
if(indiceProducto <0){
    return res.status(400).send(`no existe el ${id}`)
}
const productoEliminado =productos.splice(indiceProducto, 1)
fs.writeFileSync('./Productos.json',JSON.stringify(productos, null,2))
res.json(productoEliminado)
})

app.get('*',(req,res)=>{
   res.status(404).send('<h1>ERROR 404</h1><h2>¡ESTO ES REAL HIJO! </h2>')
})

const connectedServer = app.listen(PORT, ()=>{
    console.log(`el servidor usa el puerto ${PORT}`)
});
connectedServer.on('error',(error)=>{
    console.log(error.message)
}) 