// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { CommonModule } from "@angular/common";

export const appRoutes: Routes = [
  { path: 'new-cliente', component: NewClienteComponent },
  { path: '', redirectTo: '/new-cliente', pathMatch: 'full' }
];
