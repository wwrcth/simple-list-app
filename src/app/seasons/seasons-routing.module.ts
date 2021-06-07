import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasonPageComponent } from './pages/season/season.page';
import { SeasonsPageComponent } from './pages/seasons/seasons.page';

const routes: Routes = [
  {
    path: '',
    component: SeasonsPageComponent,
  },
  {
    path: ':seasonYear',
    component: SeasonPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeasonsRoutingModule {}
