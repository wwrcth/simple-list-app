import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SeasonDataService } from './season-data.service';

import { RaceModel } from '../models/race.model';
import { WinnerModel } from '../models/winner.model';

import { ergastApi } from '../constants/api-names.constant';
import { raceRoundsBeMock, racesBeMock, seasonBeMock } from '../mocks/season-data.mock';

describe('DataManagementService', () => {
  let service: SeasonDataService;
  let http: HttpTestingController;
  const season = 2005;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SeasonDataService],
    });

    http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SeasonDataService);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getWinners method', () => {
    it('should call "GET" method with correct endpoint', () => {
      service.getWinners(season).subscribe();

      const endpoint = `${ergastApi}/f1/${season}/driverStandings.json`;
      const req = http.expectOne(endpoint);

      expect(req.request.method).toEqual('GET');

      req.flush(null);
    });

    it('should map returned data according to model', () => {
      const mockResponse: WinnerModel = {
        season: 'season',
        winner: {
          driverId: 'driverId',
          familyName: 'familyName',
          givenName: 'givenName',
        },
      };

      service.getWinners(season).subscribe(res => expect(res).toEqual(mockResponse));

      const endpoint = `${ergastApi}/f1/${season}/driverStandings.json`;
      const req = http.expectOne(endpoint);

      req.flush(seasonBeMock);
    });
  });

  describe('getRaces method', () => {
    it('should call "GET" method with correct endpoint', () => {
      service.getRaces(season).subscribe();

      const endpoint = `${ergastApi}/f1/${season}.json`;
      const req = http.expectOne(endpoint);

      expect(req.request.method).toEqual('GET');

      req.flush(null);
    });

    it('should map returned data according to model', () => {
      const mockResponse: string[] = ['round'];

      service.getRaces(season).subscribe(res => expect(res).toEqual(mockResponse));

      const endpoint = `${ergastApi}/f1/${season}.json`;
      const req = http.expectOne(endpoint);

      req.flush(racesBeMock);
    });
  });

  describe('getRaceRounds method', () => {
    const round = 'round';

    it('should call "GET" method with correct endpoint', () => {
      service.getRaceRounds(season, round).subscribe();

      const endpoint = `${ergastApi}/f1/${season}/${round}/results.json`;
      const req = http.expectOne(endpoint);

      expect(req.request.method).toEqual('GET');

      req.flush(null);
    });

    it('should map returned data according to model', () => {
      const mockResponse: RaceModel = {
        raceName: 'raceName',
        round: 'round',
        season: 'season',
        winner: {
          driverId: 'driverId',
          familyName: 'familyName',
          givenName: 'givenName',
          isWorldChampion: true,
        },
      };

      service.getRaceRounds(season, round).subscribe(res => expect(res).toEqual(mockResponse));

      const endpoint = `${ergastApi}/f1/${season}/${round}/results.json`;
      const req = http.expectOne(endpoint);

      req.flush(raceRoundsBeMock);
    });
  });
});
