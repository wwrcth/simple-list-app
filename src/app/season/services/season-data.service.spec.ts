import { TestBed } from '@angular/core/testing';

import { SeasonDataService } from './season-data.service';

describe('DataManagementService', () => {
  let service: SeasonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeasonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
