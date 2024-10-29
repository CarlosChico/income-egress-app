import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  readonly fb: FormBuilder = inject(FormBuilder);
  readonly authService: AuthService = inject(AuthService);
  readonly router: Router = inject(Router);

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
    this.authService
      .loginUser(email, password)
      .then((res) => {
        if (res) {
          this.authService.isAuth.next(true);
          this.router.navigate(['/']);
        } else window.alert('invalid');
      })
      .catch((err) => window.alert('error'));
  }
}
