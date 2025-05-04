import { CommonModule } from '@angular/common';
// src/app/app.component.ts

import { Component } from '@angular/core';
import { AdmInterfaceComponent } from './pages/adm-interface/adm-interface.component';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {}
