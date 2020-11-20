import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from '../../../../@core/guards';
import { PaymentViewComponent } from './components';

const studentRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    canActivate: [RouteGuard],
    component: PaymentViewComponent,
    path: 'list'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(studentRoutes)]
})
export class PaymentRoutingModule {
}
