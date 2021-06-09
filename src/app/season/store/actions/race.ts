import { createAction, props } from '@ngrx/store';

import { RaceModel } from '../../models/race.model';

export const FetchRaces = createAction(
  '[Seasons] Fetch Races',
  props<{ season: number }>(),
);

export const FetchRacesSuccess = createAction(
  '[Seasons] Fetch Races Success',
  props<{ races: RaceModel[] }>(),
);

export const FetchRacesError = createAction(
  '[Seasons] Fetch Races Error',
);
