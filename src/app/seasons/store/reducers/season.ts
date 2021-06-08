import { createReducer, on } from '@ngrx/store';

import * as Actions from '../actions/season';
import * as fromRoot from './';

export interface SeasonsState {
  data: any;
}

export interface State extends fromRoot.State {
  test: SeasonsState;
}

const initialState: SeasonsState = {
  data: null,
};

export const reducer = createReducer(
  initialState,
  on(
    Actions.FetchWinners,
    (state) => ({
      ...state, data: 'test',
    }),
  ),
  on(
    Actions.FetchDataError,
    (state) => ({
      ...state,
    }),
  ),
);
