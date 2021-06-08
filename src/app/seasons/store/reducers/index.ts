import { Action, combineReducers } from '@ngrx/store';

import * as fromSeason from './season';

export interface State {
  test2: fromSeason.SeasonsState;
}

export function reducers(state: State, action: Action) {
  return combineReducers({
    test2: fromSeason.reducer,
  })(state, action);
}
