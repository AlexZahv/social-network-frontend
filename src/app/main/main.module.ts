import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {NavigationComponent} from './components/navigation/navigation.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {TokenInterceptorService} from "../auth/services/token-interceptor.service";
import {MatMenuModule} from "@angular/material/menu";
import {TimeoutInterceptor} from "../auth/services/timeout-interceptor.service";
import {AuthGuard} from "../auth/services/auth-guard";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "users",
        loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule),
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      {
        path: '', redirectTo: '/main/users', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimeoutInterceptor,
      multi: true
    }
  ]
})
export class MainModule {
}
