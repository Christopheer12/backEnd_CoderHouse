const { productos} = require('../model/productos')

class Productos {
    static lastProductoId = productos[productos.length - 1].id;
  
    constructor() {
      this.lista = productos;
    }
  
    getAll() {
      return this.lista;
    }
  
    getById(productoId) {
      return this.lista.find(producto => producto.id === +productoId);
    }
    save(producto) {
      const { title, price, imagen } = producto;
      if (!title || !price || !imagen) {
        return null;
      }
      Productos.lastProductoId++;
      const newProducto = {
        id: Productos.lastProductoId,
        title,
        price,
        imagen,
      };
  this.lista.push(newProducto)
  return newProducto
  }
    updateById(productoId,producto){
      const productoIndex = this.lista.findIndex((producto)=>producto.id ===+productoId)
      if(productoIndex <0) return null;
      const{
          title,
          price,
          imagen
      }= producto;
    const updateProducto ={
      id:this.lista[productoIndex].id,
      title,
      price,
      imagen
    }
    this.lista[productoIndex] = updateProducto
    return updateProducto;
    }
  
    deleteById(productoId){
      const productoIndex = this.lista.findIndex((producto) =>producto.id === +productoId)
      if (productoIndex <0) return null
      return this.lista.splice(productoIndex,1)
    }
    
  }
  
  
   module.exports = Productos;