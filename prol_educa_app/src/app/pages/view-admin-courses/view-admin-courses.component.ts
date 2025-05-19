import { Component } from '@angular/core';

import { SidebarMenuComponent } from '../../layout/sidebar-menu/sidebar-menu.component';
import { HeaderAdminComponent } from '../../layout/header-admin/header-admin.component';
import { CardInstituicaoComponent } from '../../components/card-instituicao/card-instituicao.component';
import { TablesCoursesComponent } from '../../components/tables-admin/tables-courses/tables-courses.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-admin-courses',
  standalone: true,
  imports: [
    SidebarMenuComponent,
    HeaderAdminComponent,
    CommonModule,
    CardInstituicaoComponent,
    TablesCoursesComponent,
  ],
  templateUrl: './view-admin-courses.component.html',
  styleUrl: './view-admin-courses.component.scss',
})
export class ViewAdminCoursesComponent {
  isSidebarCollapsed = false;

  onSidebarCollapseChange(collapsed: boolean): void {
    this.isSidebarCollapsed = collapsed;
  }
}
