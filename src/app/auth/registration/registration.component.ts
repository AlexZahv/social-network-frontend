import {Component, OnInit} from '@angular/core';
import {UserRegistration} from "../models/user-registration";
import {UserService} from "../../main/service/user.service";
import {SnackbarService} from "../../shared/services/snackbar-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registration: UserRegistration = new UserRegistration();

  constructor(private userService: UserService,
              private snackbarService: SnackbarService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.registerUser(this.registration).subscribe(() => {
      this.snackbarService.successSnackBar('Registration was successful for user ' + this.registration.firstName);
      this.registration = new UserRegistration();
      setTimeout(() => {
        this.router.navigateByUrl('/auth/login');
      }, 2000)
    })
  }

}
