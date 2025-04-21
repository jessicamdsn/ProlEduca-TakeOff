import { Component } from '@angular/core';
import { CourseRegistrationComponent } from './pages/course-registration/course-registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseRegistrationComponent],
  template: `<app-course-registration></app-course-registration>`,
  styles: []
})
export class AppComponent {
  title = 'prol_educa_app';
}
