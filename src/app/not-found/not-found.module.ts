import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';

import { NotFoundEntryPageComponent } from './pages/entry/entry.page';

@NgModule({
  declarations: [
    NotFoundEntryPageComponent,
  ],
  imports: [
    NotFoundRoutingModule,
    CommonModule,
    RouterModule,
  ],
})
export class NotFoundModule {}
