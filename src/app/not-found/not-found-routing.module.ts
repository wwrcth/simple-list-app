import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundEntryPageComponent } from './pages/entry/entry.page';

const routes: Routes = [
  {
    path: '',
    component: NotFoundEntryPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundRoutingModule {}
