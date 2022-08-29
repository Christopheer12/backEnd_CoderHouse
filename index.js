const fs = require('fs')

class Contenedor{
    constructor(name){
        this.name =name;
    }

    async save(informacion){
        
        try{
            let contenido = await fs.promises.readFile(`./${this.name}`,`utf-8`)
            let contendijson =JSON.parse(contenido)
            let ultimoIndice = contendijson.length -1
            let ultimoId = contendijson[ultimoIndice].id
            informacion.id = ultimoId + 1
            let id = informacion.id
            contendijson.push(informacion)
            await fs.promises.writeFile(`./${this.name}`,JSON.stringify(contendijson) )
            return id
        }
        catch(error){
            console.log(error)
        }

       
    }

    async getById(id){
        try{
            let contenido = await fs.promises.readFile(`./${this.name}`, `utf-8`)
            let contendijson = JSON.parse(contenido)
            let contenidoExtraidoDelArray 
            contendijson.forEach(element =>{
                if(element.id == id){
                    contenidoExtraidoDelArray = element
                }
            });
            return contenidoExtraidoDelArray
            
        }
        catch(error){
            console-log("error getById")
        }
        

    }
    async getAll(){
       
        try{
            let contenido = await fs.promises.readFile(`./${this.name}`, `utf-8`)
            let contendijson = JSON.parse(contenido)
            return contendijson
        }
        catch(error){
            console.log("error getAll")
        }
    }
    async deleteById(id){
        

    }
    deleteAll(){

    }
}

let contenedor = new Contenedor("Productos.json")

let informacionNueva ={
    "title": "Tijera",
    "price": 183.45,
    "id":4
}

/* contenedor.save(informacionNueva).then(respuestaDePromesa=>{
    console.log(respuestaDePromesa)
}) */

/* contenedor.getById(1).then(result=>{
    console.log(result)
}) */
contenedor.getAll().then(result=>{
    console.log(result)
})