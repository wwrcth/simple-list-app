import { Component, ChangeDetectionStrategy } from '@angular/core';

import { dictionary } from '../../../core/constants/dictionary';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './entry.page.html',
  styleUrls: ['./entry.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundEntryPageComponent {
  dictionary = dictionary;

  constructor() {}
}
