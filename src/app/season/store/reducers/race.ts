import { createReducer, createSelector, on } from '@ngrx/store';

import { RaceActions } from '../actions';
import { rootSelector } from './root-selector';
import * as fromRoot from './index';

import { RaceModel } from '../../models/race.model';

export interface RaceState {
  races: RaceModel[];
}

export interface State extends fromRoot.State {
  race: RaceState;
}

const initialState: RaceState = {
  races: [],
};

export const reducer = createReducer(
  initialState,
  on(
    RaceActions.FetchRacesSuccess,
    (state, { races }) => ({ ...state, races }),
  ),
  on(
    RaceActions.ClearRaces,
    (state) => ({ ...state, races: [] }),
  ),
);

export const getState = createSelector(
  rootSelector,
  (state: State): RaceState => state.race,
);

export const getRaces = createSelector(
  getState,
  (state: RaceState): RaceModel[] => state.races,
);

