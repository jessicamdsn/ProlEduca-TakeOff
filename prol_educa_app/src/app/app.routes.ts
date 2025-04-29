import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { InstitutionRegistrationComponent } from './pages/institution-registration/institution-registration.component';
import { CourseRegistrationComponent } from './pages/course-registration/course-registration.component';
import { AdminRegistrationComponent } from './pages/admin-registration/admin-registration.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar-instituicao', component: InstitutionRegistrationComponent },
  { path: 'cadastrar-curso', component: CourseRegistrationComponent },
  { path: 'cadastrar-adm', component: AdminRegistrationComponent },
  // { path: '**', component: NotFoundComponent }
];
