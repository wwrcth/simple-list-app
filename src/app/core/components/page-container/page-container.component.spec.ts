import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { PageContainerComponent } from './page-container.component';

const initialState = {
  core: {
    ui: {
      spinner: {
        visibility: 0,
      },
    },
  },
};

describe('PageContainerComponent', () => {
  let component: PageContainerComponent;
  let fixture: ComponentFixture<PageContainerComponent>;
  let compiled: any;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [PageContainerComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideMockStore({ initialState })],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContainerComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create page container component', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should hide spinner by default', () => {
    fixture.detectChanges();
    const spinner = compiled.querySelector('app-spinner');

    expect(spinner).toBeFalsy();
  });

  it('should show spinner if isSpinnerVisible changes value to true', () => {
    component.isSpinnerVisible = of(true);
    fixture.detectChanges();
    const spinner = compiled.querySelector('app-spinner');

    expect(spinner).toBeTruthy();
  });
});
