const http = require('http');

//createServer               request  response
const server = http.createServer((req,res)=>{
res.write('hola mundo');
res.end();    

});

//listen
server.listen(8080);   
