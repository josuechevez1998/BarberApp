import { Routes } from "@angular/router";
import { DashboardComponent } from "../layouts/dashboard.component/dashboard.component";
import { HomeComponent } from "../pages/home.component/home.component";

export const dashboardRoutes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

export default dashboardRoutes;
