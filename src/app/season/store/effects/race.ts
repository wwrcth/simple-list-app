import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { forkJoin } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { RaceActions } from '../actions';
import * as UiActions from '../../../core/store/actions/ui';

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
            switchMap(([raceRounds, winnerData]) => {
              return forkJoin(raceRounds.map(round => this.dataManagementService.getRaceRounds(season, round))).pipe(
                map((races) => {
                  const test = races.map((race) => {
                    return {
                      ...race,
                      winner: { ...race.winner, isWorldChampion: race.winner?.driverId === winnerData.winner?.driverId }
                    }
                  })
                  console.log(test);
                  // console.log(races);
                  console.log(winnerData)
                  return RaceActions.FetchRacesSuccess({ races });
                })
              )
            }),
          )
      ),
    ),
  );
}
