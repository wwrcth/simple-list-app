import { createAction, props } from '@ngrx/store';

import { RaceModel } from '../../models/race.model';

export const FetchRaces = createAction(
  '[Race] Fetch Races',
  props<{ season: number }>(),
);

export const FetchRacesSuccess = createAction(
  '[Race] Fetch Races Success',
  props<{ races: RaceModel[] }>(),
);

export const FetchRacesError = createAction(
  '[Race] Fetch Races Error',
);

export const ClearRaces = createAction(
  '[Race] Clear Races',
);
