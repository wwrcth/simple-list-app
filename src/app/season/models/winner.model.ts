import { DriverBeModel } from './driver.model';

interface DriverStandingBeModel {
  Driver: DriverBeModel;
  points: string;
  position: string;
  positionText: string;
  wins: string;
}

interface StandingItemBeModel {
  DriverStandings: DriverStandingBeModel[];
  season: string;
  round: string;
}

export interface SeasonBeModel {
  MRData: {
    StandingsTable: {
      StandingsLists: StandingItemBeModel[];
      season: string;
    };
    limit: string;
    offset: string;
    series: string;
    total: string;
    url: string;
    xmlns: string;
  };
}

export interface WinnerModel {
  winner?: {
    driverId: string;
    familyName: string;
    givenName: string;
  };
  season: string;
}
