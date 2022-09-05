// https://glitch.com/edit/#!/expresscoderhouse?path=server.js%3A21%3A2
 
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.get('/',(req, res)=>{
    res.send('Esto es el inicio de la pagina, para arancar nodemon se usar : npm rum start-dev ')
})
app.get('/login', (req,res)=>{
    res.send('Hola. ¿Listo para ingresar?')
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