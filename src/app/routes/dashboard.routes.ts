import { Routes } from "@angular/router";
import { DashboardComponent } from "../layouts/dashboard.component/dashboard.component";
import { HomeComponent } from "../pages/home.component/home.component";
import { CustomersComponent } from "../pages/customers.component/customers.component";
import { BranchesComponent } from "../pages/branches.component/branches.component";
import { BarbersComponent } from "../pages/barbers.component/barbers.component";

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
        path: 'customers',
        component: CustomersComponent
      },
      {
        path: 'branches',
        component: BranchesComponent
      },
      {
        path: 'barbers',
        component: BarbersComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

export default dashboardRoutes;
