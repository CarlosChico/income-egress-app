import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  readonly router: Router = inject(Router);
  readonly authService: AuthService = inject(AuthService);
  onLogout(): void {
    this.authService.logout().then((res) => this.router.navigate(['login']));
  }
}
