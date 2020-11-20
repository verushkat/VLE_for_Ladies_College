import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const featureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'administration'
  },
  {
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule),
    path: 'administration'
  },
  {
    loadChildren: () => import('./parent-portal/parent.module').then(m => m.ParentModule),
    path: 'parent-portal'
  },
  {
    loadChildren: () => import('./student-portal/student-portal.module').then(m => m.StudentPortalModule),
    path: 'student-portal'
  },
  {
    loadChildren: () => import('./teacher-portal/teacher-portal.module').then(m => m.TeacherPortalModule),
    path: 'teacher-portal'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(featureRoutes)]
})
export class FeatureRoutingModule {
}
