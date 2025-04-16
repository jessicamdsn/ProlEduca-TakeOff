import { Component } from '@angular/core';
import { InstitutionFormComponent } from '../../components/institution-form/institution-form.component';

@Component({
  selector: 'app-institution-registration',
  standalone: true,
  imports: [InstitutionFormComponent],
  templateUrl: './institution-registration.component.html',
})
export class InstitutionRegistrationComponent {
  dadosIniciais = {
    razaoSocial: 'Minha Instituição Teste',
    cidade: 'Recife',
    estado: 'PE'
  };

  handleFormSubmit(data: any) {
    console.log('Dados recebidos no cadastro:', data);
  }
}
