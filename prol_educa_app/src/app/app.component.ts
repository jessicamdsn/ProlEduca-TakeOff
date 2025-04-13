import { Component } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from "./layout/header/header.component";
import { BolsasListComponent } from "./components/bolsas-list/bolsas-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, BolsasListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prol_educa_app';
}
