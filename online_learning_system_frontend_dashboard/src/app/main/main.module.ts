import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule
} from '@nebular/theme';
import { CoreModule } from '../@core/core.module';
import { ThemeModule } from '../@theme/theme.module';
import { BaseComponent } from './components';
import { COMPONENTS } from './index';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { SocketIoConfig, SocketIoModule } from 'ng-socket-io';
import { environment } from '../../environments/environment';
import {AngularFireModule} from "@angular/fire";

const config: SocketIoConfig = {url: environment.socketURL, options: {}};

@NgModule({
  declarations: [...COMPONENTS],
  exports: [BaseComponent],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    SharedModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    SocketIoModule.forRoot(config),
    CoreModule.forRoot(),
    ThemeModule
  ]
})
export class AppMainModule {
}
