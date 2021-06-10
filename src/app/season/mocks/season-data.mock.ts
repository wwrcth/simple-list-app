import { SeasonBeModel } from '../models/winner.model';
import { CircuitBeModel, RaceRoundsBeModel, RacesBeModel } from '../models/race.model';
import { DriverBeModel } from '../models/driver.model';

const driverMock: DriverBeModel = {
  code: 'code',
  dateOfBirth: 'dateOfBirth',
  driverId: 'driverId',
  familyName: 'familyName',
  givenName: 'givenName',
  nationality: 'nationality',
  permanentNumber: 'permanentNumber',
  url: 'url',
};

const circuitMock: CircuitBeModel = {
  Location: {
    country: 'country',
    lat: 'lat',
    locality: 'locality',
    long: 'long',
  },
  circuitId: 'circuitId',
  circuitName: 'circuitName',
  url: 'url',
};

export const seasonBeMock: SeasonBeModel = {
  MRData: {
    StandingsTable: {
      StandingsLists: [
        {
          DriverStandings: [
            {
              Driver: driverMock,
              points: 'points',
              position: '1',
              positionText: '1',
              wins: 'wins',
            },
          ],
          season: 'season',
          round: 'round',
        },
      ],
      season: 'season',
    },
    limit: 'limit',
    offset: 'offset',
    series: 'series',
    total: 'total',
    url: 'url',
    xmlns: 'xmlns',
  },
};

export const racesBeMock: RacesBeModel = {
  MRData: {
    RaceTable: {
      Races: [
        {
          Circuit: circuitMock,
          date: 'date',
          raceName: 'raceName',
          round: 'round',
          season: 'season',
          time: 'time',
          url: 'url',
        },
      ],
      season: 'season',
    },
    limit: 'limit',
    offset: 'offset',
    series: 'series',
    total: 'total',
    url: 'url',
    xmlns: 'xmlns',
  },
};

export const raceRoundsBeMock: RaceRoundsBeModel = {
  MRData: {
    RaceTable: {
      Races: [
        {
          Results: [
            {
              Driver: driverMock,
              Constructor: {
                constructorId: 'constructorId',
                name: 'name',
                nationality: 'nationality',
                url: 'url',
              },
              FasterLap: {
                AverageSpeed: {
                  units: 'units',
                  speed: 'speed',
                },
                Time: {
                  time: 'time',
                },
                lap: 'lap',
                rank: 'rank',
              },
              Time: {
                millis: 'millis',
                time: 'time',
              },
              grid: 'grid',
              laps: 'laps',
              number: 'number',
              points: 'points',
              position: '1',
              positionText: '1',
              status: 'status',
            },
          ],
          Circuit: circuitMock,
          date: 'date',
          raceName: 'raceName',
          round: 'round',
          season: 'season',
          time: 'time',
          url: 'url',
        },
      ],
      round: 'round',
      season: 'season',
    },
    limit: 'limit',
    offset: 'offset',
    series: 'series',
    total: 'total',
    url: 'url',
    xmlns: 'xmlns',
  },
};
