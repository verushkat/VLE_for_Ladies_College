import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbRadioModule
} from '@nebular/theme';
import { SharedModule } from '../../../../shared/shared.module';

import { TeacherRoutingModule } from './teacher-routing.module';

import { COMPONENTS, SERVICES } from './index';
import { DataTableModule } from 'ornamentum';

@NgModule({
  declarations: [...COMPONENTS],
  // entryComponents: [...ENTRY_COMPONENTS],
  exports: [],
  imports: [
    TeacherRoutingModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    NbCheckboxModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbRadioModule,
    NbInputModule
  ],
  providers: [SERVICES]
})
export class TeacherModule {
}
