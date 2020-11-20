import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from '../../@core/guards';
import { StudentAssignmentViewComponent } from './components';

const studentAssignmentsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'assignment-view'
  },
  {
    canActivate: [RouteGuard],
    component: StudentAssignmentViewComponent,
    path: 'assignment-view'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(studentAssignmentsRoutes)]
})
export class StudentPortalRoutingModule {
}
