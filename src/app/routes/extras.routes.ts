import { Routes } from '@angular/router';
import { FormularioComponent } from '../components/formulario/formulario.component';
import { TablaComponent } from '../components/tabla/tabla.component';
import { Tabla2Component } from '../components/tabla2/tabla2.component';

export const ROUTES: Routes = [
    {path: 'formulario',component:FormularioComponent},
    { path: 'tabla1', component: TablaComponent },
    { path: 'tabla2', component: Tabla2Component },
    { path: '', pathMatch: 'full', redirectTo: 'formulario' },
    { path: '**', pathMatch: 'full', redirectTo: 'formulario' },
]