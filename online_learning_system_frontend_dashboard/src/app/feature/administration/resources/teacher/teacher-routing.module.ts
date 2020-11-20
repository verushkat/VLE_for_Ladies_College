import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTask } from '../../../../shared/models/common/form-task';
import { TeachersViewComponent, TeacherUpsertComponent } from './components';
import { TeacherResolver } from './resolvers';
import { RouteGuard } from '../../../../@core/guards';

const teacherRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    canActivate: [RouteGuard],
    component: TeachersViewComponent,
    path: 'list'
  },
  {
    // canDeactivate: [CanDeactivateGuard],
    canActivate: [RouteGuard],
    component: TeacherUpsertComponent,
    path: 'list/add',
    data: {
      formTask: FormTask.ADD
    }
  },
  {
    canActivate: [RouteGuard],
    // canDeactivate: [CanDeactivateGuard],
    component: TeacherUpsertComponent,
    path: 'list/edit/:id',
    data: {
      formTask: FormTask.EDIT
    },
    resolve: {
      teacher: TeacherResolver
    }
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(teacherRoutes)]
})
export class TeacherRoutingModule {
}
