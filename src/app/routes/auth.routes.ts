import { Routes } from "@angular/router";
import { AuthComponent } from "../layouts/auth.component/auth.component";
import { LoginComponent } from "../pages/auth/login.component/login.component";

export const authRoutes: Routes = [

  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

export default authRoutes;
