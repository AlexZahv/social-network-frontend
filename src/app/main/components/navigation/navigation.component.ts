import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

  getRouteClass(routes: string[]): String {
    return routes.find(value =>  window.location.pathname.startsWith(value)) ? 'active-link' : 'inactive-link';
  }

}
