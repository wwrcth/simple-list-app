import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './entry.page.html',
  styleUrls: ['./entry.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundEntryPageComponent {
  constructor() {}
}
