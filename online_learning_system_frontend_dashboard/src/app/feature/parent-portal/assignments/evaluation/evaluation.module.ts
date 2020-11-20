import {NgModule} from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbRadioModule
} from '@nebular/theme';
import {SharedModule} from '../../../../shared/shared.module';
import {DataTableModule, DropdownModule} from 'ornamentum';
import {EvaluationRoutingModule} from './evaluation-routing.module';
import {COMPONENTS, SERVICES} from './index';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [...COMPONENTS],
  // entryComponents: [...ENTRY_COMPONENTS],
  exports: [
    // StudentsViewComponent
  ],
  imports: [
    EvaluationRoutingModule,
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
export class EvaluationModule {
}
