import { Component, OnInit } from '@angular/core';
import { extrasModel } from '../../share/navbar/models/extras.model';
import { Routes, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ROUTES } from '../../routes/extras.routes';
import { ExtrasService } from '../../extras.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {
  extras:extrasModel
  
  constructor( private router:Router, private extraService:ExtrasService ) { 

  }

  ngOnInit() {
    this.extras = new extrasModel;
  }

  guardar(form:NgForm){

    if (form.invalid) {
      return;
    }
    this.extraService.crearNovedad(this.extras);
    this.router.navigateByUrl('/tabla1');
  }

}
