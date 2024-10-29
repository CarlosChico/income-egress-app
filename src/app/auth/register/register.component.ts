import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);
  private authService: AuthService = inject(AuthService);
  readonly router: Router = inject(Router);

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', Validators.required],
    });
  }

  createUser() {
    if (this.registerForm.invalid) return;

    const { name, email, pwd } = this.registerForm.value;
    this.authService
      .createUser(name, email, pwd)
      .then((res) => {
        this, this.authService.isAuth.next(true);
        this.router.navigate(['/']);
      })
      .catch((err) => window.alert('error'));
  }
}
