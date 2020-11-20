import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { COMPONENTS, SERVICES } from './index';
import { NbAlertModule, NbCardModule, NbCheckboxModule, NbInputModule, NbListModule } from '@nebular/theme';

@NgModule({
  declarations: [...COMPONENTS],
  entryComponents: [],
  exports: [
    ...COMPONENTS,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NbCardModule, NbListModule, NbAlertModule, NbInputModule, NbCheckboxModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [...SERVICES]
    };
  }
}
