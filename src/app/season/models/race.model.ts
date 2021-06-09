import { DriverBeModel } from './driver.model';

interface CircuitBeModel {
  Location: {
    country: string;
    lat: string;
    locality: string;
    long: string;
  },
  circuitId: string;
  circuitName: string;
  url: string;
}

interface RaceBeModel {
  Circuit: CircuitBeModel,
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
}

interface RaceRoundBeModel extends RaceBeModel {
  Results: {
    Driver: DriverBeModel;
    Constructor: {
      constructorId: string;
      name: string;
      nationality: string;
      url: string;
    }
    FasterLap: {
      AverageSpeed: {
        units: string;
        speed: string;
      }
      Time: {
        time: string;
      }
      lap: string;
      rank: string;
    }
    Time: {
      millis: string;
      time: string;
    }
    grid: string;
    laps: string;
    number: string;
    points: string;
    position: string;
    positionText: string;
    status: string;
  }[];
}

export interface RacesBeModel {
  MRData: {
    RaceTable: {
      Races: RaceBeModel[];
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

export interface RaceRoundsBeModel {
  MRData: {
    RaceTable: {
      Races: RaceRoundBeModel[];
      season: string;
      round: string;
    };
    limit: string;
    offset: string;
    series: string;
    total: string;
    url: string;
    xmlns: string;
  };
}

export interface RaceModel {
  raceName: string;
  round: string;
  season: string;
  winner?: {
    driverId: string;
    familyName: string;
    givenName: string;
    isWorldChampion?: boolean;
  }
}
