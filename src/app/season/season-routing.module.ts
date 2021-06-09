import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasonPageComponent } from './pages/season/season.page';
import { SeasonsListingPageComponent } from './pages/seasons-listing/seasons-listing.page';

const routes: Routes = [
  {
    path: '',
    component: SeasonsListingPageComponent,
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
export class SeasonRoutingModule {}
