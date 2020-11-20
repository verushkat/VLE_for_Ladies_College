import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent, UnauthorizedComponent } from './@core/components';
import { AppMainComponent } from './main/components';
import { RouteGuard } from './@core/guards';

const routes: Routes = [
  {
    path: '',
    component: AppMainComponent,
    canActivate: [RouteGuard],
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
  },
  {
    component: UnauthorizedComponent,
    path: 'unauthorized'
  },
  {
    component: LoginComponent,
    path: 'login'
  }
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
