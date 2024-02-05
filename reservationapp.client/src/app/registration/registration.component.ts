import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private userService: UserService, private router: Router) {}

  applyForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  register() {
    console.log(this.applyForm.value);
    if (this.applyForm.valid) {
      const credentials = {
        ...this.applyForm.value,
      };

      this.userService.register(credentials)
        .subscribe(
          (response) => {
            console.log('register successful:', response);
            this.router.navigate(['/login']);
            
          },
          (error) => {
            console.error('register failed:', error);
          }
        );
    } else {
      this.applyForm.markAllAsTouched();
      console.log('Form is invalid.');
    }
  }
}
