import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../service/user.service";
import {UserInfo} from "../../../../model/userInfo";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  searchResultList: Array<UserInfo> = [];

  constructor(private userService: UserService) {
    this.userService.searchResultSubject.subscribe(value => {
      this.searchResultList = value;
    })
  }

  ngOnInit(): void {
  }

}
