import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Login form submitted');
    console.log('Current route:', this.router.url);

    // Navigate to landing page - accept any credentials
    setTimeout(() => {
      this.router.navigateByUrl('/landing').then(success => {
        console.log('Navigation success:', success);
        console.log('New route:', this.router.url);
      }).catch(error => {
        console.error('Navigation error:', error);
      });
    }, 100);
  }

  goToLanding() {
    console.log('Going to landing directly');
    this.router.navigateByUrl('/landing').then(success => {
      console.log('Direct navigation success:', success);
    }).catch(error => {
      console.error('Direct navigation error:', error);
    });
  }
}
