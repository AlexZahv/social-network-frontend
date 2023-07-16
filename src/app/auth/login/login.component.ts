import {Component, OnInit} from '@angular/core';
import {Login} from "../models/login";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {SnackbarService} from "../../shared/services/snackbar-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new UntypedFormGroup({
    id: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
  });

  constructor(private authService: AuthService,
              private snackBarService: SnackbarService) {
  }

  ngOnInit(): void {
    this.authService.logout();
  }

  onClick() {
    this.authService.doLogin(this.loginForm.value).subscribe({
      next: (value: any) => {
        this.authService.storeTokenResponse(value);
        this.authService.storeCurrentUser(this.loginForm.value);
      },
      error: (errorResponse: any) => {
        console.error(errorResponse)
        this.snackBarService.errorSnackBar(
          errorResponse?.error?.message,
          5000
        );
      }
    });
  }

}
