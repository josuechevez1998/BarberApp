import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./routes/auth.routes'),
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
