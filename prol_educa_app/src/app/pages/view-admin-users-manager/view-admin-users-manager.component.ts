import { Component } from '@angular/core';
import { SidebarMenuComponent } from '../../components/sidebar-menu/sidebar-menu.component';
import { HeaderAdminComponent } from '../../layout/header-admin/header-admin.component';
import { CardInstituicaoComponent } from '../../components/card-instituicao/card-instituicao.component';
import { TableUsersAdminComponent } from "../../components/tables-admin/table-users-admin/table-users-admin.component";

@Component({
  selector: 'app-view-admin-users-manager',
  standalone: true,
  imports: [SidebarMenuComponent, HeaderAdminComponent, CardInstituicaoComponent, TableUsersAdminComponent],
  templateUrl: './view-admin-users-manager.component.html',
  styleUrl: './view-admin-users-manager.component.scss'
})
export class ViewAdminUsersManagerComponent {

}
