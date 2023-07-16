import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../service/user.service";
import {AuthService} from "../../../../../auth/services/auth.service";
import {UserInfo} from "../../../../model/userInfo";

@Component({
  selector: 'app-current-user-component',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss']
})
export class CurrentUserComponent implements OnInit {
  user!: UserInfo;

  constructor(private userService: UserService,
              private authService: AuthService) {
    this.userService.getCurrentUser(authService.getCurrentUserId()).subscribe(value => {
      this.user = value;
    })
  }

  ngOnInit(): void {
  }

}
