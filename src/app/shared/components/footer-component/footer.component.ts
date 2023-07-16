import {Component, OnDestroy, OnInit} from '@angular/core';
import {VersionService} from "../../../main/service/version.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  versionSubscription: Subscription;
  appVersion!: string;

  ngOnInit(): void {
  }

  constructor(private versionService: VersionService) {
    this.versionSubscription = this.versionService.versionSubject.subscribe(value => {
      setTimeout(() => {
        if (value) {
          this.appVersion = value;
        }
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    this.versionSubscription.unsubscribe();
  }

}
