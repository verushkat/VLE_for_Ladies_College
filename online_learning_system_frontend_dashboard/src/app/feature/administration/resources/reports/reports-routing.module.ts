import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from '../../../../@core/guards';
import { ReportsViewComponent } from './components';

const studentRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'generate'
  },
  {
    canActivate: [RouteGuard],
    component: ReportsViewComponent,
    path: 'generate'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(studentRoutes)]
})
export class ReportsRoutingModule {
}
