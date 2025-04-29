import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { ScholarshipFormsComponent } from '../../components/scholarship-forms/scholarship-forms.component';

@Component({
  selector: 'app-scholarship-registration',
  standalone: true,
  imports: [ScholarshipFormsComponent, HeaderComponent],
  templateUrl: './scholarship-registration.component.html',
  styleUrl: './scholarship-registration.component.scss'
})
export class ScholarshipRegistrationComponent {

}
