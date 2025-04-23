import { Component } from '@angular/core';
import { AdminFormComponent } from '../../components/admin-form/admin-form.component'; 
import { SidebarMenuComponent } from '../../components/sidebar-menu/sidebar-menu.component';
import { HeaderAdminComponent } from "../../layout/header-admin/header-admin.component";

@Component({
  selector: 'app-admin-registration',
  standalone: true,
  imports: [AdminFormComponent, SidebarMenuComponent, HeaderAdminComponent],
  templateUrl: './admin-registration.component.html',
  styleUrl: './admin-registration.component.scss'
})
export class AdminRegistrationComponent {

}
