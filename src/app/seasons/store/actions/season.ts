import { createAction, props } from '@ngrx/store';

export const FetchData = createAction(
  '[Seasons] Fetch Data',
);

export const FetchDataSuccess = createAction(
  '[Seasons] Fetch Data Success',
);

export const FetchDataError = createAction(
  '[Seasons] Fetch Data Error',
);

export const FetchWinners = createAction(
  '[Seasons] Fetch Winners',
  props<{ startSeason: number, endSeason: number }>(),
);

export const FetchWinnersSuccess = createAction(
  '[Seasons] Fetch Winners Success',
);

export const FetchWinnersError = createAction(
  '[Seasons] Fetch Winners Error',
);
