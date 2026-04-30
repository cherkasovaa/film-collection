import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage),
    data: { breadcrumb: 'Home' },
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page').then((m) => m.AboutPage),
    data: { breadcrumb: 'About' },
  },
  {
    path: 'films/:id',
    loadComponent: () => import('./pages/film-page/film-page').then((m) => m.FilmPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
