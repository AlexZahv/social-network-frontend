import { Component, OnInit } from '@angular/core';
import {SpinnerStateModel} from "../../model/spinner-state.model";
import {SpinnerService} from "../../services/spinner.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  spinnerState: SpinnerStateModel = new SpinnerStateModel(false);

  constructor(private spinnerService: SpinnerService) {
    this.spinnerService.stateSubscription().subscribe(value => {
      this.spinnerState = value;
    })
  }

  ngOnInit(): void {
  }

}
