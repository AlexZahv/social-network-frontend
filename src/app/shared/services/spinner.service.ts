import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {SpinnerStateModel} from "../model/spinner-state.model";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private activeRequests = 0;
  private spinnerState: SpinnerStateModel = new SpinnerStateModel(false);
  spinnerStateSubject: BehaviorSubject<SpinnerStateModel> = new BehaviorSubject<SpinnerStateModel>(this.spinnerState);

  constructor() {

  }

  enableSpinner() {
    this.activeRequests += 1;
    if (!this.spinnerState.isEnabled) {
      this.spinnerState.isEnabled = true;
      this.spinnerStateSubject.next(this.spinnerState);
    }
  }

  disableSpinner() {
    this.activeRequests = Math.max(this.activeRequests - 1, 0);
    if (this.activeRequests <= 0 && this.spinnerState.isEnabled) {
      this.activeRequests = 0;
      this.spinnerState.isEnabled = false;
      this.spinnerStateSubject.next(this.spinnerState);
    }
  }

  stateSubscription(): Observable<SpinnerStateModel> {
    return this.spinnerStateSubject.asObservable();
  }
}
