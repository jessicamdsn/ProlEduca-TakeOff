import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component'; // Caminho correto
import { ProfileAvatarComponent } from '../../components/profile-avatar/profile-avatar.component'; // Caso precise

@Component({
  selector: 'app-course-registration',
  standalone: true,
  imports: [HeaderComponent],  // Agora você importa o HeaderComponent corretamente aqui
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.scss']
})
export class CourseRegistrationComponent {

  onSubmit() {
    alert('Formulário enviado!');
  }

  onCancel() {
    alert('Alterações canceladas.');
  }
}
