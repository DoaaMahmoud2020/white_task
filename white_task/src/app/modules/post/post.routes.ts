import { Routes } from '@angular/router';
export const postRoutes: Routes = [
  {
    
    path: 'posts',
    children: [
      {
        path: '',
        loadComponent() {
          return import('./components/posts/posts.component').then(
            (c) => c.PostsComponent
          );
        },
      },
      {
        path: ':id',
        loadComponent() {
          return import(
            './components/posts/post-details/post-details.component'
          ).then((c) => c.PostDetailsComponent);
        },
      },
    ],
  },
];
