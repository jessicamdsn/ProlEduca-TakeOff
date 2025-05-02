import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../layout/header-admin/header-admin.component";
import { SidebarMenuComponent } from '../../layout/sidebar-menu/sidebar-menu.component';
import { CourseFormComponent } from '../../components/course-form/course-form.component';

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
