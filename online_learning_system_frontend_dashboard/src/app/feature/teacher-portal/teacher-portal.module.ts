import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbRadioModule, NbSelectModule, NbSpinnerModule, NbTabsetModule
} from '@nebular/theme';
import { SharedModule } from '../../shared/shared.module';
import { DataTableModule, DropdownModule } from 'ornamentum';
import { TeacherPortalRoutingModule } from './teacher-portal-routing.module';
import { COMPONENTS } from './index';
import { SERVICES } from './index';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [],
  imports: [
    TeacherPortalRoutingModule,
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
    NbSpinnerModule,
    SweetAlert2Module,
    SweetAlert2Module.forChild({ /* options */}),
    NbTabsetModule
  ],
  providers: [...SERVICES]
})
export class TeacherPortalModule {
}
