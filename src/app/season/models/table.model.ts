export enum TableHeading {
  season = 'Season',
  winner = 'Winner',
  round = 'Round',
  race = 'Race',
}

export interface TableRowModel {
  cells: string[];
  isRowHighlighted: boolean;
}

export interface TableBodyModel {
  clickCallback?: (seasonYear: string) => Promise<boolean>;
  rows: TableRowModel[];
}

export interface TableModel {
  headings: TableHeading[];
  body: TableBodyModel;
}
