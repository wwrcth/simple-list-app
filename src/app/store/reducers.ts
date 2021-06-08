import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

import * as fromCore from '../core/store/reducers';

export interface State {
  core: fromCore.State;
}

export const reducers: ActionReducerMap<State> = {
  core: fromCore.reducer,
};

export const reducerToken = new InjectionToken<ActionReducerMap<State>>('Root Reducers');
