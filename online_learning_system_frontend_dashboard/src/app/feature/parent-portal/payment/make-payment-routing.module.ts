import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakePaymentComponent } from './components';
import { RouteGuard } from '../../../@core/guards';

const evalRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'make'
  },
  {
    canActivate: [RouteGuard],
    component: MakePaymentComponent,
    path: 'make'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(evalRoutes)]
})
export class MakePaymentRoutingModule {
}
