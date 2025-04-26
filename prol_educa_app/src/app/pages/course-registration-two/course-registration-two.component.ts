import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';  // Caminho correto

@Component({
  selector: 'app-course-registration-two',
  standalone: true, // Isso indica que o componente é standalone
  imports: [HeaderComponent],  // Adicione o HeaderComponent aqui
  templateUrl: './course-registration-two.component.html',
  styleUrls: ['./course-registration-two.component.scss']
})
export class CourseRegistrationTwoComponent {}