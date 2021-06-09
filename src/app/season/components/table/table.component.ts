import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { TableModel, TableRowModel } from '../../models/table.model';

import { winnersTableData } from '../../constants/table.constant';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() data: TableModel = winnersTableData;

  constructor() {}

  onRowClick(selectedRow: TableRowModel): void {
    const [year] = selectedRow.cells;

    if (this.data.body.clickCallback) {
      this.data.body.clickCallback(year);
    }
  }
}
