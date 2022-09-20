const express = require('express');
 const fs = require('fs/promises');
 const path = require('path')
 const{engine}= require('express-handlebars')

 const PORT = 8080

 const app = express();


 app.engine('hbs', engine({



    extname: 'hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: path.resolve(__dirname, './views/layouts'),
    partialsDir: path.resolve(__dirname,'./views/partials')
 }))

 app.set('views','./views')
 app.set ('view engine','hbs')

 app.listen(PORT,()=>console.log ('puesto listo en', PORT))
