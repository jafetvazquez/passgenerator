import { Routes } from '@angular/router';
import PassgenComponent from './passgen/passgen.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => PassgenComponent
    },
    { 
        path: '',
        loadComponent: () => PassgenComponent,
        pathMatch: 'full' 
    },
    { 
        path: '**',
        loadComponent: () => PassgenComponent
    }
];
