import { Component } from '@angular/core';
import { CustomerInterfaceComponent } from './pages/customer-interface/customer-interface.component';
import { HomePageComponent } from "./pages/home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePageComponent],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {}
