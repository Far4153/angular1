
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoginFormVisible: boolean = true;

  constructor() { }

  toggleForms(): void {
    const loginForm = document.querySelector('.login-form') as HTMLElement;
    const signupForm = document.querySelector('.signup-form') as HTMLElement;

    if (this.isLoginFormVisible) {
      // Move the login form slightly to the right (over the signup form)
      loginForm.style.transform = 'translateX(10px)';
      // Set a higher z-index to ensure login form is on top
      loginForm.style.zIndex = '2';

      // Reset the signup form position
      signupForm.style.transform = 'translateX(0)';
      signupForm.style.zIndex = '1';
    } else {
      // Reset the login form position
      loginForm.style.transform = 'translateX(0)';
      loginForm.style.zIndex = '1';

      // Move the signup form slightly to the right (over the login form)
      signupForm.style.transform = 'translateX(10px)';
      // Set a higher z-index to ensure signup form is on top
      signupForm.style.zIndex = '2';
    }

    this.isLoginFormVisible = !this.isLoginFormVisible;
  }
}

