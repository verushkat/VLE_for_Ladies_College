import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {SocketIoModule, SocketIoConfig} from 'ng-socket-io';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule, MatProgressSpinnerModule} from '@angular/material';
import {MenuPageComponent} from './menu-page/menu-page.component';
import {environment} from '../environments/environment';
import {PaintingPageComponent} from './painting-page/painting-page.component';
import {CanvasComponent} from './canvas-component/canvas.component';
import {AngularFireModule} from '@angular/fire';
import {MatButtonModule} from '@angular/material/button';
import {NgxFloatButtonModule} from "ngx-float-button";
import { McqPaperComponent } from './mcq-paper/mcq-paper.component';
import { QuestionComponent } from './mcq-paper/question/question.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { ScormPanelComponent } from './scorm-panel/scorm-panel.component';
const config: SocketIoConfig = {url: environment.socketURL, options: {}};


@NgModule({
    declarations: [
        AppComponent,
        WelcomePageComponent,
        MenuPageComponent,
        PaintingPageComponent,
        CanvasComponent,
        McqPaperComponent,
        QuestionComponent,
        ScormPanelComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        SocketIoModule.forRoot(config),
        BrowserAnimationsModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        NgxFloatButtonModule,
        SweetAlert2Module.forRoot()

],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
