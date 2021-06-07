import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'

import { SeasonsRoutingModule } from './seasons-routing.module';

import { SeasonsPageComponent } from './pages/seasons/seasons.page';
import { SeasonPageComponent } from './pages/season/season.page';

@NgModule({
  declarations: [
    SeasonsPageComponent,
    SeasonPageComponent,
  ],
  imports: [
    SeasonsRoutingModule,
    CommonModule,
    RouterModule,
  ],
})
export class SeasonsModule {}
