import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AuthService} from "./services/auth.service";
import {SharedModule} from "../shared/shared.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptorService} from "./services/token-interceptor.service";
import {MatDividerModule} from "@angular/material/divider";
import {SnackbarService} from "../shared/services/snackbar-service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TimeoutInterceptor} from "./services/timeout-interceptor.service";

const routes: Routes = [
  {path: "", component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        SharedModule,
        MatDividerModule
    ],
  providers: [
    AuthService,
    MatSnackBar,
    SnackbarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:  TimeoutInterceptor,
      multi: true
    }
  ]
})

export class AuthModule {
}
