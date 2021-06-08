import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, tap, finalize } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SeasonsActions from '../actions/season';
import * as UiActions from '../../../core/store/actions/ui';
import {DataManagementService} from "../../../services/data-management.service";

@Injectable()
export class SeasonEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private dataManagementService: DataManagementService,
  ) {}

  fetchWinners$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(SeasonsActions.FetchWinners),
      tap(() => this.store.dispatch(UiActions.ShowSpinner())),
      switchMap(({ startSeason, endSeason }) => {
        return this.dataManagementService.getDictionaryData().pipe(
          map((data) => {
            console.log(startSeason, endSeason);
            console.log(data);
            return SeasonsActions.FetchWinnersSuccess();
          }));
        },
      ),
    ),
  );
}
