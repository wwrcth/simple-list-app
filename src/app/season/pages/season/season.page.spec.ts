import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { SeasonPageComponent } from './season.page';

import { dictionary } from '../../../core/constants/dictionary';

const initialState = {
  season: {
    race: {
      races: [],
    },
  },
};

describe('SeasonPageComponent', () => {
  let component: SeasonPageComponent;
  let fixture: ComponentFixture<SeasonPageComponent>;
  let compiled: any;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [SeasonPageComponent],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideMockStore({ initialState })],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonPageComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create season page component', () => {
    expect(component).toBeTruthy();
  });

  it('should display note', () => {
    const titleElement = compiled.querySelector('.text-medium');

    expect(titleElement.textContent).toBe(dictionary.raceTableNote);
  });
});
