import { TableModel, TableHeading } from '../models/table.model';

export const winnersTableData: TableModel = {
  headings: [TableHeading.season, TableHeading.winner],
  body: { rows: [] },
};

export const racesTableData: TableModel = {
  headings: [TableHeading.round, TableHeading.race, TableHeading.winner],
  body: { rows: [] },
};
