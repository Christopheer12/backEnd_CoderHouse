const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

const connectedServer = app.listen(PORT, ()=>{
    console.log(`el servidor usa el puerto ${PORT}`)
});
connectedServer.on('error',(error)=>{
    console.log(error.message)
})