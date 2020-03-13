import { Injectable } from '@angular/core';
import { extrasModel } from './share/navbar/models/extras.model';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {
  extras:extrasModel[]=[];
  constructor() { }

  crearNovedad(data:extrasModel){
    const crearNovedad = {
      ...data
    };
    this.extras.push(crearNovedad);
    this.guardarStorage();
  }

  guardarStorage(){
    localStorage.setItem('novedad',JSON.stringify(this.extras));
  }

  cargarStorage(){
    if (localStorage.getItem('data')) {
      this.extras = JSON.parse(localStorage.getItem('data'));
    }else{
      this.extras =[];
    }
     
  }
}
