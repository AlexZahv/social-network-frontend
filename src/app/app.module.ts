import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "./shared/shared.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptorService} from "./auth/services/token-interceptor.service";
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MY_FORMATS} from "./date-formats";
import {TimeoutInterceptor} from "./auth/services/timeout-interceptor.service";
import {VersionService} from "./main/service/version.service";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatMomentDateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimeoutInterceptor,
      multi: true
    },
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    VersionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
