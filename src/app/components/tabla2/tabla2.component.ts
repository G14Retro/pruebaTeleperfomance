import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-tabla2',
  templateUrl: './tabla2.component.html',
  styles: []
})
export class Tabla2Component implements OnInit {
  users:[] =[];
  constructor( private dataservice:DataService) {
    this.dataservice.obtenerData().subscribe((resp:any)=>{
      this.users = resp;
      console.log(resp);
    });
   }

  ngOnInit() {
  }

}
