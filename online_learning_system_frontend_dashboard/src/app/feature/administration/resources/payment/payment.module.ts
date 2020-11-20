import { NgModule } from '@angular/core';
import {
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
import { PaymentRoutingModule } from './payment-routing.module';


@NgModule({
  declarations: [...COMPONENTS],
  exports: [],
  imports: [
    PaymentRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DropdownModule.forRoot(),
    NbCheckboxModule,
    NbRadioModule,
    NbActionsModule,
    NbSelectModule
  ],
  providers: [SERVICES]
})
export class PaymentModule {
}
