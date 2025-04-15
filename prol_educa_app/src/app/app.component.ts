import { Component } from '@angular/core';
import { ContactSectionComponent } from "./layout/contact-section/contact-section.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { LoginComponent } from "./pages/login/login.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactSectionComponent, FooterComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prol_educa_app';
}
