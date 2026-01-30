import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { landingGuard } from './core/guards/landing.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'landing', loadComponent: () => import('./module/landing/landing.component').then(m => m.LandingComponent) },
  { path: 'test-route', component: LoginComponent },
];
