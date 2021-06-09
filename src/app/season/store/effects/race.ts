import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {forkJoin, of} from 'rxjs';
import {map, switchMap, tap, finalize, catchError} from 'rxjs/operators';

import { RaceActions } from '../actions';
import { UiActions } from '../../../core/store/actions';

import { SeasonDataService } from '../../services/season-data.service';

@Injectable()
export class RaceEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private dataManagementService: SeasonDataService,
  ) {}

  fetchRaces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RaceActions.FetchRaces),
      tap(() => this.store.dispatch(UiActions.ShowSpinner())),
      switchMap(({ season }) =>
        forkJoin([this.dataManagementService.getRaces(season), this.dataManagementService.getWinners(season)])
          .pipe(
            switchMap(([raceRounds, winnerData]) =>
              forkJoin(raceRounds.map(round => this.dataManagementService.getRaceRounds(season, round))).pipe(
                map((races) => this.dataManagementService.mapRacesWithWorldChampionResults(races, winnerData.winner?.driverId)),
                map((races) => RaceActions.FetchRacesSuccess({ races })),
                catchError((err) => of(RaceActions.FetchRacesError(err))),
                finalize(() => this.store.dispatch(UiActions.HideSpinner())),
              ),
            ),
          ),
      ),
    ),
  );

  fetchRacesError$ = createEffect(() =>
      this.actions$.pipe(
        ofType(RaceActions.FetchRacesError),
        tap((err) => console.error(`Error occurred during request: ${err}`)),
      ),
    { dispatch: false },
  );
}
