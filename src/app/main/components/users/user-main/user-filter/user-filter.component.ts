import {Component, OnInit} from '@angular/core';
import {UserFilter} from "../../../../model/user-filter";
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent implements OnInit {
  filter = new UserFilter();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  userFilterIsValid(): boolean {
    return !!this.filter
      && !!this.filter.firstName && this.filter.firstName.trim() != '' && this.filter.firstName.trim().length >= 3
      && !!this.filter.lastName && this.filter.lastName.trim() != '' && this.filter.lastName.trim().length >= 3
  }

  submitSearch() {
    console.log('Search submitted ', this.filter);
    this.userService.searchUsers(this.filter.firstName, this.filter.lastName);
  }

}
