class Usuario{
    constructor(nombre, apellido, libros, mascostas){
        this.nombre = nombre//string
        this.apellido = apellido,//string
        this.libros =libros,//object
        this.mascostas =mascostas//string
    }

}
const persona1 = new Usuario("Bojack","HorseMan",[{
    libro:"Secretaria",
    autor:"Diane Nguyen",
},{
    libro:"One Trick Pony",
    autor:"Diane Nguyen"
},],"Todd")
console.log(persona1)