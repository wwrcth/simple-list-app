import {Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { WinnerActions } from '../../store/actions'
import { fromWinner } from '../../store/reducers';

import { WinnerModel } from '../../models/winner.model';
import { TableBodyModel, TableModel } from '../../models/table.model';

import { routePath } from '../../../core/constants/route-path.constant';
import { winnersTableData } from '../../constants/table.constant';

@Component({
  selector: 'app-seasons-listing-page',
  templateUrl: './seasons-listing.page.html',
  styleUrls: ['./seasons-listing.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeasonsListingPageComponent implements OnInit, OnDestroy {
  tableData: TableModel = winnersTableData;
  winnersSubscription: Subscription;

  constructor(
    private store: Store<any>,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.winnersSubscription = this.store.select(fromWinner.getWinners).subscribe((winners) => {
      this.tableData = { ...this.tableData, body: this.getWinnersTableBody(winners) };
      this.cdr.markForCheck();
    });
  }

  ngOnInit(): void {
    const startSeason = 2005;
    const currentSeason = new Date().getFullYear();

    this.store.dispatch(WinnerActions.FetchWinners({ startSeason, endSeason: currentSeason }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(WinnerActions.ClearWinners());
    this.winnersSubscription.unsubscribe();
  }

  private getWinnersTableBody(winnersData: WinnerModel[]): TableBodyModel {
    return {
      clickCallback: (seasonYear: string) => this.router.navigateByUrl(`/${routePath.seasons}/${seasonYear}`),
      rows: winnersData.map(({ season, winner }) => ({
        cells: [season, winner ? `${winner.givenName} ${winner.familyName}` : ''],
        isRowHighlighted: false,
      })),
    };
  }
}
