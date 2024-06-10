import { Routes } from '@angular/router';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
export const routes: Routes = [{ path: 'new-cliente', component: NewClienteComponent},
{ path: 'edit-cliente', component: EditClienteComponent}
];
