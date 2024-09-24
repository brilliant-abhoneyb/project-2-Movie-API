import { Routes, ExtraOptions } from '@angular/router';

export const routes: Routes = [
    {path:'', loadComponent: () => import('./components/login/login.component').then(a => a.LoginComponent)},
    {path:'browse', loadComponent: () => import('./components/movie/movie.component').then(a => a.MovieComponent)},
    {path:'search/:text', loadComponent: () => import('./components/search/search.component').then(a => a.SearchComponent)},
    {path:'description/:id', loadComponent: () => import('./components/description/description.component').then(a => a.DescriptionComponent)}
];

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
}
