import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const administrationRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'students'
  },
  {
    loadChildren: () => import('./resources/student/student.module').then(m => m.StudentModule),
    path: 'students'
  },
  {
    loadChildren: () => import('./resources/teacher/teacher.module').then(m => m.TeacherModule),
    path: 'teachers'
  },
  {
    loadChildren: () => import('./resources/payment/payment.module').then(m => m.PaymentModule),
    path: 'payments'
  },
  {
    loadChildren: () => import('./resources/reports/reports.module').then(m => m.ReportsModule),
    path: 'reports'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(administrationRoutes)]
})
export class AdministrationRoutingModule {
}
