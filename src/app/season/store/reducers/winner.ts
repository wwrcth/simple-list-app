import { createReducer, createSelector, on } from '@ngrx/store';

import * as fromRoot from './index';
import { rootSelector } from './root-selector';
import { WinnerActions } from '../actions';

import { WinnerModel } from '../../models/winner.model';

export interface WinnerState {
  winners: WinnerModel[];
}

export interface State extends fromRoot.State {
  winner: WinnerState;
}

const initialState: WinnerState = {
  winners: [],
};

export const reducer = createReducer(
  initialState,
  on(
    WinnerActions.FetchWinnersSuccess,
    (state, { winners }) => ({ ...state, winners }),
  ),
  on(
    WinnerActions.FetchWinnersError,
    (state) => ({
      ...state,
    }),
  ),
  on(
    WinnerActions.ClearWinners,
    (state) => ({ ...state, winner: [] }),
  ),
);

export const getSeasonsState = createSelector(
  rootSelector,
  (state: State): WinnerState => state.winner,
);

export const getWinners = createSelector(
  getSeasonsState,
  (state: WinnerState): WinnerModel[] => state.winners,
);
