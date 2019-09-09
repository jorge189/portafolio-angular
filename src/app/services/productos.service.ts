import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interface/producto.interface';
import { promise } from 'protractor';
import { resolve } from 'path';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  
  productos: Producto [] = [];
  cargando = true; // bandera que inicializa el servicio
  productosFiltrado: Producto [] = []; // arreglo que se tiene que llenar para hacer los filtros
  
  constructor( private http: HttpClient) {
    this.cargarProductos();
   }
  private cargarProductos(){

    return new Promise ((resolve,reject) =>{
    this.http.get('https://potafolio-21ffd.firebaseio.com/productos_/.json')
    .subscribe((respp: Producto [] ) =>{ // de esta forma traemos el arreglo vacio
    //console.log(respp);
      this.productos = respp ;
     // console.log(this.productos);
      setTimeout (() => {
      this.cargando = false;
    },2000); 
     })  
     resolve();  
    });

    
    }
     getProducto( id: String){
      return this.http.get(`https://potafolio-21ffd.firebaseio.com/productos/${id}.json`); // el bactick (``) permite integrar elementos de tipo string 
      }
    buscarProducto( termino: string){

      if( this.productos.length === 0){
        // cargar productos 
        this.cargarProductos().then(()=> {
          // ejecutar despues de tener los productos 
          // aplicar el filtro
          this.filtrarProductos(termino); 
        });
      } else{
        
        // filtrar productos
        this.filtrarProductos(termino);
      }
// this.productosFiltrado = this.productos.filter(producto => {return true;});console.log(this.productosFiltrado); primer metodo usado para hacer el filtrado
      }
    private filtrarProductos( termino: string) {
      console.log(this.productos);
      this.productosFiltrado = [];

      termino = termino.toLocaleLowerCase();  
      this.productos.forEach(produ => {
        const titulomin = produ.titulo.toLocaleLowerCase();
        if(produ.categoria.indexOf( termino ) >= 0 || titulomin.indexOf(termino)>=0){
          this.productosFiltrado.push(produ);
        }
      });
    }
  }
