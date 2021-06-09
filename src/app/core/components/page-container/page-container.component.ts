import {ChangeDetectionStrategy, Component} from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';

import { fromUi } from '../../store/reducers'

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageContainerComponent {
  isSpinnerVisible: Observable<boolean>;

  constructor(private store: Store<any>) {
    this.isSpinnerVisible = this.store.select(fromUi.getSpinnerIsVisibleFlag);
  }
}
