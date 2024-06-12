// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CommonModule } from "@angular/common";

export const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: '/cliente', 
    pathMatch: 'full' 
  },
  { 
    path: 'cliente', 
    component: ClienteComponent 
  },
  
  { 
    path: 'new-cliente', 
    component: NewClienteComponent 
  },




];
