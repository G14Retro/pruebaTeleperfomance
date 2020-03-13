import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { Tabla2Component } from './components/tabla2/tabla2.component';


import { ROUTES } from "./routes/extras.routes";


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablaComponent,
    NavbarComponent,
    Tabla2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES,{useHash:false}),
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
