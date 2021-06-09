import { Action, combineReducers } from '@ngrx/store';

import * as fromRace from './race';
import * as fromWinner from './winner';

export interface State {
  race: fromRace.RaceState;
  winner: fromWinner.WinnerState,
}

export function reducers(state: State, action: Action) {
  return combineReducers({
    race: fromRace.reducer,
    winner: fromWinner.reducer,
  })(state, action);
}

export {
  fromRace,
  fromWinner,
};
