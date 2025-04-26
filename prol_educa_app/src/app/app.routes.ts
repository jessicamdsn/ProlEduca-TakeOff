import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'course-registration-two',
    pathMatch: 'full'
  },
  {
    path: 'course-registration-two',
    loadComponent: () =>
      import('./pages/course-registration-two/course-registration-two.component')
        .then(m => m.CourseRegistrationTwoComponent)
  }
];
