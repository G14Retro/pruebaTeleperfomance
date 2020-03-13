import { Component, OnInit } from '@angular/core';
import { extrasModel } from '../../share/navbar/models/extras.model';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: []
})
export class TablaComponent implements OnInit {
  extras:[]=[];
  constructor() {
    
   this.extras = JSON.parse(localStorage.getItem('novedad'));
   }

  ngOnInit() {
  }

}
