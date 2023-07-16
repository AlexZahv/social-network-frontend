import {Component} from '@angular/core';
import {VersionModel, VersionService} from "./main/service/version.service";
import {SnackbarService} from "./shared/services/snackbar-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  RELOAD_TIMEOUT = 300000;
  VERSION_INTERVAL = 60000;
  title = 'Social network';
  currentVersion!: string;

  constructor(private versionService: VersionService, private snackBarService: SnackbarService) {
    this.setActualVersion();
    setInterval(() => {
      this.setActualVersion();
    }, this.VERSION_INTERVAL);
  }

  setActualVersion(): void {
    this.versionService.getVersion().subscribe((value: VersionModel) => {
      if (!this.currentVersion) {
        this.currentVersion = value.version;
        this.versionService.versionSubject.next(this.currentVersion);
      } else if (this.currentVersion && this.currentVersion !== value.version) {
        this.snackBarService.errorSnackBar(
          'Attention, you are using not actual version of application. You should refresh current tab in browser.',
          this.VERSION_INTERVAL
        )
        setTimeout(() => {
          window.location.reload();
        }, this.RELOAD_TIMEOUT)
      }
    });
  }

}
