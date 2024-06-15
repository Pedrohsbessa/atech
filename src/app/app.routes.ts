
import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component'; // Importe o UserListComponent

export const routes: Routes = [
  { path: '', component: UserFormComponent },
  { path: 'user-list', component: UserListComponent }, // Adicione a nova rota aqui
  // outras rotas...
];
