import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('@app/pages/login').then((m) => m.LoginModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    loadChildren: () => import('@app/pages/home').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
];
