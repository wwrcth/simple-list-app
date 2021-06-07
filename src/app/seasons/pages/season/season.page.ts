import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-season-page',
  templateUrl: './season.page.html',
  styleUrls: ['./season.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeasonPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
