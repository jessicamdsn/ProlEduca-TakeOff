import { Component } from '@angular/core';
import { HeaderAdminComponent } from '../../layout/header-admin/header-admin.component';
import { SidebarMenuComponent } from '../../layout/sidebar-menu/sidebar-menu.component';
import { CardInstituicaoComponent } from '../../components/card-instituicao/card-instituicao.component';
import { TableInstitutionsComponent } from "../../components/tables-admin/table-institutions/table-institutions.component";

@Component({
  selector: 'app-view-admin-instituition',
  standalone: true,
  imports: [SidebarMenuComponent, HeaderAdminComponent, CardInstituicaoComponent, TableInstitutionsComponent],
  templateUrl: './view-admin-instituition.component.html',
  styleUrl: './view-admin-instituition.component.scss'
})
export class ViewAdminInstituitionComponent {

}
