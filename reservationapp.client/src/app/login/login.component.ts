import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {

  loginError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  applyForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login() {
    console.log(this.applyForm.value);
    if (this.applyForm.valid) {
      const credentials = {
        ...this.applyForm.value,
      };

      this.authService.login(credentials)
        .subscribe(
          (response) => {
            console.log('Login successful:', response);
            this.router.navigate(['/home']);
          },
          (error) => {
            console.error('Login failed:', error);
            this.loginError = 'Login failed. Please check your credentials.';

          }
        );
    } else {
      this.applyForm.markAllAsTouched();
      console.log('Form is invalid.');
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
