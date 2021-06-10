import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NotFoundEntryPageComponent } from './entry.page';

import { dictionary } from '../../../core/constants/dictionary';

describe('NotFoundEntryPageComponent', () => {
  let component: NotFoundEntryPageComponent;
  let fixture: ComponentFixture<NotFoundEntryPageComponent>;
  let compiled: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundEntryPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundEntryPageComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create 404 page component', () => {
    expect(component).toBeTruthy();
  });

  it('should create heading element', () => {
    const titleElement = compiled.querySelector('.text-big');

    expect(titleElement.textContent).toBe(dictionary.notFoundHeading);
  });

  it('should create description elements', () => {
    const descriptionElement = compiled.querySelector('.text-medium');

    expect(descriptionElement.textContent).toBe(dictionary.notFoundDescription);
  });
});
