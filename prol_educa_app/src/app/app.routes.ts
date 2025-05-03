import { Routes } from '@angular/router';
import { AdminRegistrationComponent } from './pages/admin-registration/admin-registration.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CustomerInterfaceComponent } from './pages/customer-interface/customer-interface.component';
import { LoginComponent } from './pages/login/login.component';


import { ViewAdminUsersComponent } from './pages/view-admin-users/view-admin-users.component';
import { ViewAdminUsersManagerComponent } from './pages/view-admin-users-manager/view-admin-users-manager.component';
import { ViewAdminCoursesComponent } from './pages/view-admin-courses/view-admin-courses.component';
import { CourseRegistrationComponent } from './pages/course-registration/course-registration.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cliente', component: CustomerInterfaceComponent },
  { path: 'admin', children: [
      { path: '', component: ViewAdminUsersManagerComponent },
      { path: 'cadastro', component: AdminRegistrationComponent },
      { path: 'bolsistas', children: [
          { path: '', component: ViewAdminUsersComponent },
        ]},
      { path: 'cursos', children: [
          { path: '', component: ViewAdminCoursesComponent },
          { path: 'cadastro', component: CourseRegistrationComponent }
        ]}
    ]
  }
];

