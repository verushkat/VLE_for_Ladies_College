import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const assignmentsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'eval'
  },
  {
    loadChildren: () => import('./assignments/evaluation/evaluation.module').then(m => m.EvaluationModule),
    path: 'eval'
  },
  {
    loadChildren: () => import('./payment/make-payment.module').then(m => m.MakePaymentModule),
    path: 'payment'
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(assignmentsRoutes)]
})
export class ParentRoutingModule {
}
