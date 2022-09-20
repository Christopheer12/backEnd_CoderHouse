const productos = [
  {
    title: "Escuadra",
    price: 123.45,
    id: 1,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Squadra_45.jpg",
  },
  {
    title: "Calculadora",
    price: 234.56,
    id: 2,
    imagen:
      "https://www.officedepot.com.gt/medias/34845.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MzU4Mzg0fGltYWdlL2pwZWd8aDRlL2g3MC85NjY3OTIyNDYwNzAyLmpwZ3w3MDQwYmJmNjMyNGZlZmIzNTVhYTBkMWM2Yzc3OGVlZWJkODQ0ZDE4Yzc4ZTQ3OGRiNjEzYjMxNzdkMjRmOTQ1",
  },
  {
    title: "Globo terraqueo",
    price: 345.67,
    id: 3,
    imagen:
      "https://mijormi.vteximg.com.br/arquivos/ids/174900-1000-1332/Globo-terraqueo-cromado-DIAGO-NIQUEL-M-Landmark-0.jpg?v=637789767200070000",
  },
  {
    title: "Tijera",
    price: 183.45,
    id: 4,
    imagen: "https://www.tesorosdelayer.com/imgs/lotes/lote_23030.jpg",
  },
  {
    title: "lapiz",
    price: 2000,
    id: 5,
    imagen: "https://definicion.de/wp-content/uploads/2011/10/lapiz.png",
  },
];

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