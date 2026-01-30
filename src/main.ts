import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/features/auth/login/login.component';

import { authGuard } from './app/core/guards/auth.guard';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
      },
      {
        path: 'auth/login',
        component: LoginComponent
      },
      {
        path: 'landing',
        loadComponent: () => import('./app/module/landing/landing.component').then(m => m.LandingComponent)
      },
      {
        path: '**',
        redirectTo: 'landing'
      }
    ])
  ]
});
