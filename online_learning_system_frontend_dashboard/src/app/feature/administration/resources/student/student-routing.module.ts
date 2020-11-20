import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTask } from '../../../../shared/models/common/form-task';
import { StudentsViewComponent, StudentUpsertComponent } from './components';
import { StudentResolver } from './resolvers';
import { RouteGuard } from '../../../../@core/guards';

const studentRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    canActivate: [RouteGuard],
    component: StudentsViewComponent,
    path: 'list'
  },
  {
    canActivate: [RouteGuard],
    // canDeactivate: [CanDeactivateGuard],
    component: StudentUpsertComponent,
    path: 'list/add',
    data: {
      formTask: FormTask.ADD
    }
  },
  {
    canActivate: [RouteGuard],
    // canDeactivate: [CanDeactivateGuard],
    component: StudentUpsertComponent,
    path: 'list/edit/:id',
    resolve: {
      student: StudentResolver
    },
    data: {
      formTask: FormTask.EDIT
    }
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(studentRoutes)]
})
export class StudentRoutingModule {
}
