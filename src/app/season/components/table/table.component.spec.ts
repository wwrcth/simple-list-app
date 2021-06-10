import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

import { TableHeading } from '../../models/table.model';

import { winnersTableData } from '../../constants/table.constant';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let compiled: any;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create table component', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should create heading cells from passed data', () => {
    component.data = {
      ...winnersTableData,
      body: {
        rows: [{ cells: ['cell 1', 'cell 2'], isRowHighlighted: false }],
      },
    };
    fixture.detectChanges();

    const headingCells = compiled.querySelectorAll('.heading-cell');
    const [firstHeadingCell, secondHeadingCell] = headingCells;

    expect(headingCells.length).toEqual(2);
    expect(firstHeadingCell.textContent).toEqual(TableHeading.season);
    expect(secondHeadingCell.textContent).toEqual(TableHeading.winner);
  });

  it('should create body cells from passed data', () => {
    component.data = {
      ...winnersTableData,
      body: {
        rows: [{ cells: ['cell 1', 'cell 2'], isRowHighlighted: false }],
      },
    };
    fixture.detectChanges();

    const bodyCells = compiled.querySelectorAll('.body-cell');
    const [firstBodyCell, secondBodyCell] = bodyCells;

    expect(bodyCells.length).toEqual(2);
    expect(firstBodyCell.textContent).toEqual('cell 1');
    expect(secondBodyCell.textContent).toEqual('cell 2');
  });

  it('should not highlight body cells if isRowHighlighted flag is false', () => {
    component.data = {
      ...winnersTableData,
      body: {
        rows: [{ cells: ['cell 1', 'cell 2'], isRowHighlighted: false }],
      },
    };
    fixture.detectChanges();

    const bodyCells = compiled.querySelectorAll('.body-cell');
    const [firstBodyCell, secondBodyCell] = bodyCells;

    expect(firstBodyCell.classList.contains('highlighted')).toBeFalsy();
    expect(secondBodyCell.classList.contains('highlighted')).toBeFalsy();
  });

  it('should highlight body cells if isRowHighlighted flag is true', () => {
    component.data = {
      ...winnersTableData,
      body: {
        rows: [{ cells: ['cell 1', 'cell 2'], isRowHighlighted: true }],
      },
    };
    fixture.detectChanges();

    const bodyCells = compiled.querySelectorAll('.body-cell');
    const [firstBodyCell, secondBodyCell] = bodyCells;

    expect(firstBodyCell.classList.contains('highlighted')).toBeTruthy();
    expect(secondBodyCell.classList.contains('highlighted')).toBeTruthy();
  });

  it('should call clickCallback on row click if passed', () => {
    const spy = jest.fn();
    component.data = {
      ...winnersTableData,
      body: {
        rows: [{ cells: ['cell 1', 'cell 2'], isRowHighlighted: false }],
        clickCallback: () => spy(),
      },
    };
    fixture.detectChanges();

    const bodyRow = compiled.querySelector('.body-row');
    bodyRow.click();

    expect(spy).toHaveBeenCalled();
  });
});
