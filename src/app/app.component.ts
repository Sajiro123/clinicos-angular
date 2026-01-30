import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend-clinicos';

  constructor(private router: Router) {
    // Log route changes
    this.router.events.subscribe(event => {
      console.log('Route event:', event);
      console.log('Current URL:', this.router.url);
    });
  }
}
