// https://glitch.com/edit/#!/expresscoderhouse?path=server.js%3A21%3A2
 
const express = require('express');
const fs = require('fs')

const productos =JSON.parse(fs.readFileSync('./Productos.json','utf-8'))
const PORT = process.env.PORT || 8080;
const app = express();

app.get('/',(req, res, next)=>{
    res.send(`<h1>Esto es el inicio de la pagina, para arancar nodemon se usar : npm rum start-dev</h1> 
    <h2>Rutas disponibles</h2>
    <li>/productos</li>
    <li>/productosRamdon</li>`)
})
app.get('/productos', (req,res,next)=>{
    console.log(req.query)
    const{price = 0 } = req.query;
    
    const priceNumber =+(price)
    const resProductos = productos.filter((producto)=> producto.price <priceNumber
);
    res.json(resProductos)

})







app.get('/productosRamdon', (req,res)=>{
    res.send('<h1>Ramdon</h1>')
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