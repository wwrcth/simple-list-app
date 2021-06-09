import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { RaceActions } from '../../store/actions';
import { fromRace } from '../../store/reducers';

import { RaceModel } from '../../models/race.model';
import { TableBodyModel, TableModel } from '../../models/table.model';

import { racesTableData } from '../../constants/table.constant';

@Component({
  selector: 'app-season-page',
  templateUrl: './season.page.html',
  styleUrls: ['./season.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeasonPageComponent implements OnInit, OnDestroy {
  tableData: TableModel = racesTableData;
  racesSubscription: Subscription;

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {
    this.racesSubscription = this.store.select(fromRace.getRaces).subscribe((races) => {
      this.tableData = { ...this.tableData, body: this.getRacesTableBody(races) };
      this.cdr.markForCheck();
    });
  }

  ngOnInit(): void {
    const { seasonYear } = this.route.snapshot.params;

    this.store.dispatch(RaceActions.FetchRaces({ season: seasonYear }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(RaceActions.ClearRaces());
    this.racesSubscription.unsubscribe();
  }

  private getRacesTableBody(racesData: RaceModel[]): TableBodyModel {
    return {
      rows: racesData.map(({ round, season, winner }) => ({
        cells: [round, season, winner ? `${winner.givenName} ${winner.familyName}` : ''],
        isRowHighlighted: !!winner?.isWorldChampion,
      })),
    };
  }
}
