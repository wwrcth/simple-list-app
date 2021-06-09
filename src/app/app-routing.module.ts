import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routePath } from './core/constants/route-path.constant';

const routes: Routes = [
  {
    path: routePath.seasons,
    loadChildren: () => import('./season/season.module').then(m => m.SeasonModule),
  },
  {
    path: routePath.notFound,
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
  },
  {
    path: routePath.landing,
    redirectTo: routePath.seasons,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: routePath.notFound,
  },
];

// scrollPositionRestoration: 'top',
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
