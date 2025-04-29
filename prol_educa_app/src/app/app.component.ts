import { CommonModule } from '@angular/common';
// src/app/app.component.ts

import { Component } from '@angular/core';
import { AdmInterfaceComponent } from "./pages/adm-interface/adm-interface.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdmInterfaceComponent, CommonModule],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {}
