import { NgModule } from '@angular/core';
import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule
} from '@nebular/theme';
import { SharedModule } from '../../../../shared/shared.module';
import { COMPONENTS, SERVICES } from './index';

import { DataTableModule, DropdownModule } from 'ornamentum';
import { ReportsRoutingModule } from './reports-routing.module';


@NgModule({
  declarations: [...COMPONENTS],
  exports: [],
  imports: [
    ReportsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DropdownModule.forRoot(),
    NbCheckboxModule,
    NbRadioModule,
    NbActionsModule,
    NbSelectModule,
    NbAccordionModule
  ],
  providers: [SERVICES]
})
export class ReportsModule {
}
