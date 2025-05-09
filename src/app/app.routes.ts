import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClasesComponent } from './components/clases/clases.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component:InicioComponent
    },
    {
        path: 'perfil',
        component: PerfilComponent
    },
   
    {
        path: 'clases',
        component: ClasesComponent
    },
    
    {
        path: '**',
        component: ErrorComponent,
        pathMatch: 'full'
    }
];
