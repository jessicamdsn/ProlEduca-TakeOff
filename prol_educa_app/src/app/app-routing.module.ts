import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseRegistrationTwoComponent } from './pages/course-registration-two/course-registration-two.component'; // Importando corretamente o componente

const routes: Routes = [
    { path: 'course-registration-two', component: CourseRegistrationTwoComponent },  // Rota para o novo componente
    { path: '', redirectTo: '/course-registration-two', pathMatch: 'full' }  // Redireciona para a rota padrão
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],  // Registrando as rotas no módulo de roteamento
    exports: [RouterModule]
})
export class AppRoutingModule { }
