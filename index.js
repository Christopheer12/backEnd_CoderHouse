const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.get('/',(req, res)=>{
    res.send('Esto es elñ inicio de la pagina')
})

const connectedServer = app.listen(PORT, ()=>{
    console.log(`el servidor usa el puerto ${PORT}`)
});
connectedServer.on('error',(error)=>{
    console.log(error.message)
})