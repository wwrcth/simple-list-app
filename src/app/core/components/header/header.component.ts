import { ChangeDetectionStrategy, Component } from '@angular/core';

import { routePath } from '../../constants/route-path.constant';
import { dictionary } from '../../constants/dictionary';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  routePath = routePath;
  dictionary = dictionary;

  constructor() {}
}
