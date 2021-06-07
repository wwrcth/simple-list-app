import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {DataManagementService} from "../../../services/data-management.service";

@Component({
  selector: 'app-seasons-page',
  templateUrl: './seasons.page.html',
  styleUrls: ['./seasons.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeasonsPageComponent implements OnInit {
  constructor(
    private dataManagementService: DataManagementService,
  ) {}

  data: any;

  ngOnInit(): void {
    this.dataManagementService.getDictionaryData().subscribe(data => {
      console.log(data.MRData.StandingsTable);
    });
  }
}
