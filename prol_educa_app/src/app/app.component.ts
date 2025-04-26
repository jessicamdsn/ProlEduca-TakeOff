// src/app/app.component.ts
// src/app/app.component.ts
import { Component } from '@angular/core';
import { CourseRegistrationTwoComponent } from './pages/course-registration-two/course-registration-two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseRegistrationTwoComponent],
  template: `<app-course-registration-two></app-course-registration-two>`,
  styles: []
})
export class AppComponent {
  title = 'prol_educa-app';
}
