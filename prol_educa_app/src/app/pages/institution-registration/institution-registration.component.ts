import { Component } from '@angular/core';
import { InstitutionFormComponent } from '../../components/institution-form/institution-form.component';
import { SidebarMenuComponent } from '../../components/sidebar-menu/sidebar-menu.component';

@Component({
  standalone: true,
  selector: 'app-institution-registration',
  templateUrl: './institution-registration.component.html',
  styleUrls: ['./institution-registration.component.scss'],
  imports: [SidebarMenuComponent, InstitutionFormComponent], // por exemplo
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
