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
            console.log(contendijson)

        }
        catch(error){
            console.log(error)
        }

       
    }
    getById(id){

    }
    getAll(){
        let objeto
        return objeto
    }
    deleteById(id){

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

contenedor.save(informacionNueva)