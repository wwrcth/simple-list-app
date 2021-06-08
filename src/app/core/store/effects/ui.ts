import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

@Injectable()
export class UiEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
  ) {}
}
