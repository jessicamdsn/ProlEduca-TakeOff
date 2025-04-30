import { CommonModule } from '@angular/common';
// src/app/app.component.ts

import { Component } from '@angular/core';
import { AdmInterfaceComponent } from "./pages/adm-interface/adm-interface.component";
import { CustomerInterfaceComponent } from './pages/customer-interface/customer-interface.component';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AdminRegistrationComponent } from './pages/admin-registration/admin-registration.component';
import { ViewAdminUsersComponent } from "./pages/view-admin-users/view-admin-users.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdmInterfaceComponent, CommonModule],
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {}
