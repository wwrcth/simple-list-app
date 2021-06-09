import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PageContainerComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    PageContainerComponent,
    SpinnerComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
