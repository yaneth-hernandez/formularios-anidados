import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private PRODUCTOS = [
    { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2' },
    { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3' },
  ];
  constructor() {}

  obtenerProductos(){
    return this.PRODUCTOS
  }

  obtenerProductoPorId(id:number){
    return this.PRODUCTOS.find(producto=>producto.id === id)
  }
}
