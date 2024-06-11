// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { NewClienteComponent } from './new-cliente/new-cliente.component';

export const appRoutes: Routes = [
  { path: 'new-client', component: NewClienteComponent },
  { path: '', redirectTo: '/new-client', pathMatch: 'full' }
];
