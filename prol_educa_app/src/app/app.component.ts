// src/app/app.component.ts

import { Component } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePageComponent],
  template: `<app-home></app-home>`,
  styles: []
})
export class AppComponent {}
