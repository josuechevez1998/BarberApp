import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./routes/auth.routes'),
  },
  {
    path: '',
    loadChildren: () => import('./routes/dashboard.routes'),
  },
];
