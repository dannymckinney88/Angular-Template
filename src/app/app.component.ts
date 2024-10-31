import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./auth/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterModule, HeaderComponent, CommonModule, LoginComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router) {}

  isAuthRoute(): boolean {
    return this.router.url === '/login' || this.router.url === '/register';
  }
}
