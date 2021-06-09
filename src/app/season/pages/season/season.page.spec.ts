import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonPageComponent } from './season.page';

describe('SeasonPageComponent', () => {
  let component: SeasonPageComponent;
  let fixture: ComponentFixture<SeasonPageComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [SeasonPageComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create season page component', () => {
    expect(component).toBeTruthy();
  });
});
