import { Component } from '@angular/core';
import { CourseFormComponent } from '../../components/course-form/course-form.component';
import { SidebarMenuComponent } from '../../components/sidebar-menu/sidebar-menu.component';
import { HeaderAdminComponent } from "../../layout/header-admin/header-admin.component";

@Component({
  selector: 'app-course-registration',
  standalone: true,
  imports: [CourseFormComponent, HeaderAdminComponent, SidebarMenuComponent],
  templateUrl: './course-registration.component.html',
  styleUrl: './course-registration.component.scss'
})
export class CourseRegistrationComponent {
  handleFormSubmit(data: any) {
    console.log('Dados recebidos no cadastro:', data);
  }

  isSidebarCollapsed = false;

  onSidebarCollapseChange(collapsed: boolean): void {
    this.isSidebarCollapsed = collapsed;
  }
}
