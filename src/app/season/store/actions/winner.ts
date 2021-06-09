import { createAction, props } from '@ngrx/store';

import { WinnerModel } from '../../models/winner.model';

export const FetchWinners = createAction(
  '[Seasons] Fetch Winners',
  props<{ startSeason: number; endSeason: number }>(),
);

export const FetchWinnersSuccess = createAction(
  '[Seasons] Fetch Winners Success',
  props<{ winners: WinnerModel[] }>(),
);

export const FetchWinnersError = createAction(
  '[Seasons] Fetch Winners Error',
  props<{ err: Error }>(),
);

export const ClearWinners = createAction(
  '[Seasons] Clear winners',
);
