import { createReducer, on } from '@ngrx/store';

import * as Actions from '../actions/ui';
import * as fromRoot from './';

export interface UIState {
  spinner: {
    visibility: number;
  };
}

export interface State extends fromRoot.State {
  ui: UIState;
}

const initialState: UIState = {
  spinner: { visibility: 0 },
};

export const reducer = createReducer(
  initialState,
  on(
    Actions.ShowSpinner,
    (state) => ({
      ...state,
      spinner: { ...state.spinner, visibility: state.spinner.visibility + 1 },
    }),
  ),
  on(
    Actions.HideSpinner,
    (state) => ({
      ...state,
      spinner: { ...state.spinner, visibility: state.spinner.visibility - 1 },
    }),
  ),
);
