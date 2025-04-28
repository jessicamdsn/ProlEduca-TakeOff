import { Routes } from '@angular/router';
import { AdminRegistrationComponent } from './pages/admin-registration/admin-registration.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CustomerInterfaceComponent } from './pages/customer-interface/customer-interface.component';
import { LoginComponent } from './pages/login/login.component';


import { ViewAdminUsersComponent } from './pages/view-admin-users/view-admin-users.component';
import { ViewAdminUsersManagerComponent } from './pages/view-admin-users-manager/view-admin-users-manager.component';
import { ViewAdminCoursesComponent } from './pages/view-admin-courses/view-admin-courses.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'customer-interface', component: CustomerInterfaceComponent},
  {path: 'admin-registration', component: AdminRegistrationComponent},
  {path: 'users', component: ViewAdminUsersComponent},
  {path: 'manager', component: ViewAdminUsersManagerComponent},
  {path: 'courses', component: ViewAdminCoursesComponent},

];
