import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { reducers, reducerToken } from './store/reducers';

import { AppEffects } from './store/effects';

const initialState = {};

@NgModule({
  imports: [
    StoreModule.forRoot(
      reducerToken,
      {
        initialState,
        runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true },
      },
    ),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    EffectsModule.forRoot(AppEffects),
  ],
  exports: [],
  providers: [
    { provide: reducerToken, useValue: reducers },
  ],
})
export class AppStoreModule { }
