import { Routes } from '@angular/router';
import { postRoutes } from '@modules/post/post.routes';
import { dashboardRoutes } from '@modules/dashboard/dashboard.routes';

export const routes: Routes = [...postRoutes, ...dashboardRoutes];
