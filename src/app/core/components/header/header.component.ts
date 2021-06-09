import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { routePath } from '../../constants/route-path.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  routePath = routePath;

  constructor() {}

  ngOnInit(): void {}
}
