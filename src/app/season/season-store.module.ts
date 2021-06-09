import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { SeasonsEffects } from './store/effects';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('season', reducers),
    EffectsModule.forFeature(SeasonsEffects),
  ],
  exports: [],
})
export class SeasonStoreModule {}
