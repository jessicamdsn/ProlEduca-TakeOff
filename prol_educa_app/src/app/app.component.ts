import { CommonModule } from '@angular/common';
// src/app/app.component.ts

import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { CustomerInterfaceComponent } from './pages/customer-interface/customer-interface.component';
import { ScholarshipRegistrationComponent } from './pages/scholarship-registration/scholarship-registration.component';
import { ViewAdminUsersManagerComponent } from './pages/view-admin-users-manager/view-admin-users-manager.component';
import { AdminRegistrationComponent } from './pages/admin-registration/admin-registration.component';
import { ViewAdminUsersComponent } from './pages/view-admin-users/view-admin-users.component';
import { ViewAdminCoursesComponent } from './pages/view-admin-courses/view-admin-courses.component';
import { CourseRegistrationComponent } from './pages/course-registration/course-registration.component';
import { InstitutionRegistrationComponent } from './pages/institution-registration/institution-registration.component';
import { ViewAdminInstituitionComponent } from './pages/view-admin-instituition/view-admin-instituition.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule,
    HomePageComponent,
    LoginComponent,
    CustomerInterfaceComponent,
    ScholarshipRegistrationComponent,
    ViewAdminUsersManagerComponent,
    AdminRegistrationComponent,
    ViewAdminUsersComponent,
    ViewAdminCoursesComponent,
    CourseRegistrationComponent,
    ViewAdminInstituitionComponent,
    InstitutionRegistrationComponent,
    CreateUserComponent
  ],

  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent { }