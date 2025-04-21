import { Routes } from '@angular/router';
import { CourseRegistrationFormComponent } from './pages/course-registration-form/course-registration-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'cadastro-curso', pathMatch: 'full' },
    { path: 'cadastro-curso', component: CourseRegistrationFormComponent }
];

