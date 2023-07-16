import {Component, Input, OnInit} from '@angular/core';
import {PageNavigationModel} from "../../model/page-navigation.model";

@Component({
  selector: 'app-page-navigation',
  templateUrl: './base-page-navigation.component.html',
  styleUrls: ['./base-page-navigation.component.scss']
})
export class BasePageNavigationComponent implements OnInit {
  @Input() elements!: PageNavigationModel[];

  constructor() {
  }

  ngOnInit(): void {
  }

  getRouteClass(routes: string[]): String {
    return routes.find(value => window.location.pathname.endsWith(value)) ? 'active-link' : 'inactive-link';
  }

}
