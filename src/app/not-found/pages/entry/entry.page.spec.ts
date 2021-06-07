import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NotFoundEntryPageComponent } from './entry.page';

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

  it('should create a 404 page component', () => {
    expect(component).toBeTruthy();
  });

  it('should create heading element', () => {
    const headingElement = compiled.querySelector('.info-heading');

    expect(headingElement.textContent).toBe(`dictionary.pageCannotBeFound.`);
  });

  it('should create description elements', () => {
    const descriptionElements = compiled.querySelectorAll('.info-description');

    expect(descriptionElements.length).toBe(2);
  });
});
