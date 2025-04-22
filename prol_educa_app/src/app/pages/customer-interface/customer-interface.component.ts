import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { BolsasListComponent } from "../../components/bolsas-list/bolsas-list.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';

@Component({
  selector: 'app-customer-interface',
  standalone: true,
  imports: [HeaderComponent, BolsasListComponent, ContactSectionComponent, FooterComponent],
  templateUrl: './customer-interface.component.html',
  styleUrl: './customer-interface.component.scss'
})
export class CustomerInterfaceComponent {

}
