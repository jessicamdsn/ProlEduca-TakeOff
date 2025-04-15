import { Component } from '@angular/core';
import { CustomerInterfaceComponent } from "./pages/customer-interface/customer-interface.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomerInterfaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prol_educa_app';
}
