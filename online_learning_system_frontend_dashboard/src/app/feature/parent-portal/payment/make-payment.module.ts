import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbRadioModule
} from '@nebular/theme';
import { DataTableModule, DropdownModule } from 'ornamentum';
import { COMPONENTS, SERVICES } from './index';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MakePaymentRoutingModule } from './make-payment-routing.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [...COMPONENTS],
  exports: [],
  imports: [
    MakePaymentRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DropdownModule.forRoot(),
    NbCheckboxModule,
    NbRadioModule,
    NbActionsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [SERVICES]
})
export class MakePaymentModule {
}
