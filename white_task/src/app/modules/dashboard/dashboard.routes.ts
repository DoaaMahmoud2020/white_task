import { Routes } from '@angular/router';
export const dashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        loadComponent() {
          return import('./components/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          );
        },
      },
    ],
  },
];
