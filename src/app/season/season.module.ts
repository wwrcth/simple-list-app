import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'

import { SeasonRoutingModule } from './season-routing.module';
import { SeasonStoreModule } from './season-store.module';

import { SeasonsListingPageComponent } from './pages/seasons-listing/seasons-listing.page';
import { SeasonPageComponent } from './pages/season/season.page';

import { SeasonDataService } from './services/season-data.service';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    SeasonsListingPageComponent,
    SeasonPageComponent,
    TableComponent,
  ],
  providers: [
    SeasonDataService,
  ],
  imports: [
    SeasonRoutingModule,
    SeasonStoreModule,
    CommonModule,
    RouterModule,
  ],
})
export class SeasonModule {}
