 import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; // Componente raiz
import { CourseRegistrationTwoComponent } from './pages/course-registration-two/course-registration-two.component'; // ✅ Caminho corrigido
import { AppRoutingModule } from './app-routing.module'; // Módulo de rotas

@NgModule({
  declarations: [
    AppComponent,
    CourseRegistrationTwoComponent // ✅ Declarado aqui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // ✅ Importando rotas
    HttpClientModule // ✅ Caso vá usar requisições HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }