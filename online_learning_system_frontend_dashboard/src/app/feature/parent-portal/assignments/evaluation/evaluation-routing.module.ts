import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvalViewComponent } from './components';
import { RouteGuard } from '../../../../@core/guards';

const evalRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'view'
  },
  {
    canActivate: [RouteGuard],
    component: EvalViewComponent,
    path: 'view'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(evalRoutes)]
})
export class EvaluationRoutingModule {
}
