import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {AuthService} from "../../../../auth/services/auth.service";
import {UserInfo} from "../../../model/userInfo";

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss']
})
export class UserMainComponent implements OnInit {
  user!: UserInfo;

  constructor(private userService: UserService,
              private authService: AuthService) {
    this.userService.getCurrentUser(authService.getCurrentUserId()).subscribe(value => {
      console.log("Current user ", value);
      this.user = value;
    })
  }

  ngOnInit(): void {
  }

}
