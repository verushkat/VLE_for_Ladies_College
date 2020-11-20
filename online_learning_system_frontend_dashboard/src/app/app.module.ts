import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppMainModule } from './main/main.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AppMainModule,
    SweetAlert2Module.forRoot()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
