import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}; // esta es la interface que se carga del la interfaz que creamos

  cargada = false;

  equipo: any [] = []; // asi se declara un arreglo vacio
  
  constructor( private http: HttpClient) { // aqui se pondran los metodos del constructor 
     this.cargaInfo ()
     this.cargaEquipo()
    }
    private cargaInfo() {
      
    
    //console.log('Servicio de pagina listo');
    // leer archivo json
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true ;
        this.info = resp
        //console.log(resp);
      });
     }
      private cargaEquipo() {

        this.http.get('https://potafolio-21ffd.firebaseio.com/equipo/.json')
        .subscribe((_resp2: any [] ) =>{ // de esta forma traemos el arreglo vacio
         // this.cargada = true;
          this.equipo = _resp2;
         // console.log(_resp2);
        })
      }
      
    }



