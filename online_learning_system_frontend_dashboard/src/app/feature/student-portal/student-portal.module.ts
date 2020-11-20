import { NgModule } from '@angular/core';
import { StudentPortalRoutingModule } from './student-portal-routing.module';
import { COMPONENTS } from './index';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbRadioModule
} from '@nebular/theme';
import { SharedModule } from '../../shared/shared.module';
import { DataTableModule, DropdownModule } from 'ornamentum';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [],
  imports: [
    StudentPortalRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DropdownModule.forRoot(),
    NbCheckboxModule,
    NbRadioModule,
    NbActionsModule
  ],
  providers: []
})
export class StudentPortalModule {
}
