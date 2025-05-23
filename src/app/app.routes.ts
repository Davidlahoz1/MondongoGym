import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClasesComponent } from './components/clases/clases.component';
import { HorarioComponent } from './components/horario/horario.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
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
        path: 'clases/:id',
        component: ClasesComponent
    },
    {
        path: 'horarios',
        component: HorarioComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: '**',
        component: ErrorComponent,
        pathMatch: 'full'
    }
];
