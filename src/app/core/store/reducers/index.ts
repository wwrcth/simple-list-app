import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';

import * as fromUi from './ui';

export interface State {
  ui: fromUi.UIState;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.reducer,
};

export const reducer: ActionReducer<State> = combineReducers(reducers);

export {
  fromUi,
};
