import { Component, HostBinding, Input } from '@angular/core';
import { SidebarComponent } from "../../components/shared/sidebar.component/sidebar.component";
import { NavbarComponent } from "../../components/shared/navbar.component/navbar.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard.component',
  imports: [
    SidebarComponent,
    NavbarComponent,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  sidebarOpen: boolean = true;

}
