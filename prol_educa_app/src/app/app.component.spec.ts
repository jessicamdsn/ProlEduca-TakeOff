import { Component } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePageComponent],
  template: `<h1>Hello, {{ title }}</h1><app-home></app-home>`,
  styles: []
})
export class AppComponent {
  title = 'prol_educa_app'; // ✅ Adicionamos esta linha
}
