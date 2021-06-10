import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { SeasonsListingPageComponent } from './seasons-listing.page';

const initialState = {
  season: {
    winner: {
      winners: [],
    },
  },
};

describe('SeasonsListingPageComponent', () => {
  let component: SeasonsListingPageComponent;
  let fixture: ComponentFixture<SeasonsListingPageComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [SeasonsListingPageComponent],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideMockStore({ initialState })],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create seasons listing page component', () => {
    expect(component).toBeTruthy();
  });
});
