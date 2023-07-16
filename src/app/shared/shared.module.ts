import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {SnackbarService} from "./services/snackbar-service";
import {BasePageNavigationComponent} from "./components/base-page-navigation/base-page-navigation.component";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatCardGridComponent} from "./components/mat-card-grid/mat-card-grid.component";
import {MatDividerModule} from "@angular/material/divider";
import {FooterComponent} from "./components/footer-component/footer.component";


@NgModule({
  declarations: [
    SpinnerComponent,
    BasePageNavigationComponent,
    MatCardGridComponent,
    FooterComponent
  ],
  exports: [
    SpinnerComponent,
    BasePageNavigationComponent,
    MatCardGridComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [
    SnackbarService,
  ]
})
export class SharedModule {
}
