import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'https://jsonplaceholder.typicode.com/';
  
  constructor(private http: HttpClient) { }

  obtenerData(){
    return this.http.get(this.url+'todos');
  }
}

