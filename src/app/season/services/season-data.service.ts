import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SeasonBeModel, WinnerModel } from '../models/winner.model';
import { RacesBeModel, RaceRoundsBeModel, RaceModel } from '../models/race.model';

import { ergastApi } from '../constants/api-names.constant';

@Injectable()
export class SeasonDataService {
  constructor(private http: HttpClient) {}

  private mapWinnersData(data: SeasonBeModel): WinnerModel {
    const [{ DriverStandings, season }] = data.MRData.StandingsTable.StandingsLists;
    const firstPosition = '1';
    const { Driver } = DriverStandings.find(driverStanding => driverStanding.position === firstPosition) || {};

    return {
      season,
      ...Driver && {
        winner: { familyName: Driver.familyName, givenName: Driver.givenName, driverId: Driver.driverId },
      },
    };
  }

  private mapRacesData(data: RacesBeModel): string[] {
    return data.MRData.RaceTable.Races.map(({ round }) => round);
  }

  private mapRaceRounds(data: RaceRoundsBeModel): RaceModel {
    const { Races, season, round } = data.MRData.RaceTable;
    const [{ Results, raceName }] = Races;
    const firstPosition = '1';
    const { Driver } = Results.find(result => result.position === firstPosition) || {};

    return {
      season,
      round,
      raceName,
      ...Driver && {
        winner: { familyName: Driver.familyName, givenName: Driver.givenName, driverId: Driver.driverId },
      },
    };
  }

  mapRacesWithWorldChampionResults(races: RaceModel[], winnerDriverId: string | undefined): RaceModel[] {
    return races.map((race) => ({
      ...race,
      ...race.winner && { winner: { ...race.winner, isWorldChampion: race.winner?.driverId === winnerDriverId } },
    }));
  }

  getWinners(season: number): Observable<WinnerModel> {
    return this.http
      .get<SeasonBeModel>(`${ergastApi}/f1/${season}/driverStandings.json`)
      .pipe(map(this.mapWinnersData));
  }

  getRaces(season: number): Observable<string[]> {
    return this.http
      .get<RacesBeModel>(`${ergastApi}/f1/${season}.json`)
      .pipe(map(this.mapRacesData));
  }

  getRaceRounds(season: number, round: string): Observable<RaceModel> {
    return this.http
      .get<RaceRoundsBeModel>(`${ergastApi}/f1/${season}/${round}/results.json`)
      .pipe(map(this.mapRaceRounds));
  }
}
