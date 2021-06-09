import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SeasonDataService } from './season-data.service';

describe('DataManagementService', () => {
  let service: SeasonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SeasonDataService],
    });
    service = TestBed.inject(SeasonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
