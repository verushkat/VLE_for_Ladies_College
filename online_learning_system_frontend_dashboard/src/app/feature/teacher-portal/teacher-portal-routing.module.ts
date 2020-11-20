import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentAssignerViewComponent, ReportsComponent } from './components';
import { RouteGuard } from '../../@core/guards';
import { NotesAddViewComponent } from './components';

const teacherPortalRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'assignment-add'
  },
  {
    canActivate: [RouteGuard],
    component: AssignmentAssignerViewComponent,
    path: 'assignment-add'
  },
  {
    canActivate: [RouteGuard],
    component: NotesAddViewComponent,
    path: 'notes-add'
  },
  {
    canActivate: [RouteGuard],
    component: ReportsComponent,
    path: 'reports'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(teacherPortalRoutes)]
})
export class TeacherPortalRoutingModule {
}
