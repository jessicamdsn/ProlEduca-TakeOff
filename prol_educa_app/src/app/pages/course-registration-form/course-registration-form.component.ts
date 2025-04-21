import { Component } from '@angular/core';

@Component({
  selector: 'app-course-registration-form',
  templateUrl: './course-registration-form.component.html',
  styleUrls: ['./course-registration-form.component.scss']
})
export class CourseRegistrationFormComponent {

  onSubmit() {
    alert('Formulário enviado!');
  }

  onCancel() {
    alert('Alterações canceladas.');
  }
}
