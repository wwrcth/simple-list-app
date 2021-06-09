import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsListingPageComponent } from './seasons.page';

describe('SeasonsPageComponent', () => {
  let component: SeasonsListingPageComponent;
  let fixture: ComponentFixture<SeasonsListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonsListingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
