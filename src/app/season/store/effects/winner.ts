import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, tap, finalize } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { WinnerActions } from '../actions';
import * as UiActions from '../../../core/store/actions/ui';

import { SeasonDataService } from '../../services/season-data.service';

@Injectable()
export class WinnerEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private dataManagementService: SeasonDataService,
  ) {}

  // todo: add error handling + spinner logic
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
        ).pipe(map((winners) => WinnerActions.FetchWinnersSuccess({ winners }))),
      ),
    ),
  );
}
