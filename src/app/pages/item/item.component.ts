import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interface/producto.interface';
import { descripcion } from 'src/app/interface/prodcucto.descripcion';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: descripcion; // este es una propiedad indefinida que retorna un valor que no esta definido
  id: string;
  constructor(private route:ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params
    .subscribe(parametros => {
      console.log(parametros['id']);
      this.productoService.getProducto(parametros['id'])
      .subscribe((producto: descripcion ) => {
        this.id = parametros['id'];// tomamos el valor del id para que vaya cambiando el url  
        this.producto=producto; // aqui se setean las propiedades del HTML
        console.log(producto); // implementar loading
      }); 
  });
  
}}
