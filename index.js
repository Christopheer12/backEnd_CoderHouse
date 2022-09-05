const http = require('http');
const port = 8080;

//createServer               request  response /// Contro + c finaliza el server
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('soy la pagina de inicio')
    }
    else if(req.url==='/login'){
        res.end('soy la pagina de login')
    }
    else{
        res.write('Error 404 Pagina. no econtrada');
    }

res.end();    

});

//listen
server.listen(port);   
