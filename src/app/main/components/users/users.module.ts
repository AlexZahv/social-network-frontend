import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserMainComponent} from './user-main/user-main.component';
import {CurrentUserComponent} from "./user-main/current-user/current-user.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {UserService} from "../../service/user.service";
import { UserFilterComponent } from './user-main/user-filter/user-filter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { UserListComponent } from './user-main/user-list/user-list.component';

const routes: Routes = [
  {
    path: "",
    component: UserMainComponent,
  }
];

@NgModule({
  declarations: [
    UserMainComponent,
    CurrentUserComponent,
    UserFilterComponent,
    UserListComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatDividerModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule {
}

