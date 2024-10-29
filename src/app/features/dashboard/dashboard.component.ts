import { Component } from '@angular/core';

import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, RouterOutlet, SidebarComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
