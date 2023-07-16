import {Component, Input} from '@angular/core';
import {PageNavigationModel} from "../../model/page-navigation.model";

@Component({
  selector: 'app-grid-filter',
  templateUrl: './base-grid-filter.component.html',
  styleUrls: ['./base-grid-filter.component.scss']
})
export class BaseGridFilterComponent {
  @Input() navigationElements!: PageNavigationModel[];
  @Input() showFilterTitle: boolean = true;

  isFilterHidden: boolean = false;

}
