import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, tap, finalize } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

import { WinnerActions } from '../actions';
import { UiActions } from '../../../core/store/actions';

import { SeasonDataService } from '../../services/season-data.service';

@Injectable()
export class WinnerEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private dataManagementService: SeasonDataService,
  ) {}

  fetchWinners$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WinnerActions.FetchWinners),
      tap(() => this.store.dispatch(UiActions.ShowSpinner())),
      switchMap(({ startSeason, endSeason }) =>
        forkJoin(
          Array.from(
            new Array(endSeason - startSeason + 1),
            (_x, i) => this.dataManagementService.getWinners(i + startSeason),
          ),
        ).pipe(
          map((winners) => WinnerActions.FetchWinnersSuccess({ winners })),
          catchError((err) => of(WinnerActions.FetchWinnersError(err))),
          finalize(() => this.store.dispatch(UiActions.HideSpinner())),
        ),
      ),
    ),
  );

  fetchWinnersError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WinnerActions.FetchWinnersError),
      tap((err) => console.error(`Error occurred during request: ${err}`)),
    ),
  { dispatch: false },
  );
}
