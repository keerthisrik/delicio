import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authservice.service';
import { HttpErrorResponse } from '@angular/common/http'; // Import for proper error handling
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupData = { email: '', password: '' };

  constructor(private authService: AuthService, private router:Router) {}

  onSignup() {
    this.authService.signup(this.signupData).subscribe({
      next: (response: any) => { // Explicitly define response type
        alert('Signup Successful');
       
      },
      error: (err: HttpErrorResponse) => { // Explicitly define error type
        let errorMessage = 'Signup Failed. Please try again.';

        if (err.error && typeof err.error === 'object' && 'message' in err.error) {
          errorMessage = err.error.message;
        } else if (typeof err.error === 'string') {
          errorMessage = err.error;
        }

        alert(errorMessage);
      }
    });
  }
}
