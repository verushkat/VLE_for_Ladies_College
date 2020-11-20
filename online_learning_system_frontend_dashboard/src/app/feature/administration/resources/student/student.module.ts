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
import { StudentsViewComponent } from './components';
import { COMPONENTS, SERVICES } from './index';

import { StudentRoutingModule } from './student-routing.module';
import { DataTableModule, DropdownModule } from 'ornamentum';


@NgModule({
  declarations: [...COMPONENTS],
  exports: [
    StudentsViewComponent
  ],
  imports: [
    StudentRoutingModule,
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
export class StudentModule {
}
