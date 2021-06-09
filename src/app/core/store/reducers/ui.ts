import { createReducer, createSelector, on } from '@ngrx/store';

import * as Actions from '../actions/ui';
import * as fromRoot from './';
import { rootSelector } from './root-selector';

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

export const getUiState = createSelector(
  rootSelector,
  (state: State): UIState => state.ui,
);

export const getSpinnerIsVisibleFlag = createSelector(
  getUiState,
  (state: UIState) => state.spinner.visibility > 0,
);
