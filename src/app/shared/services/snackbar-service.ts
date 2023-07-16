import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatSnackBarRef} from "@angular/material/snack-bar";
import {TextOnlySnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) {

  }

  openSnackBar(title: string, message: string): MatSnackBarRef<TextOnlySnackBar> {
    return this._snackBar.open(title + ' ' + message, undefined, {
      duration: 3000,
      panelClass: ['success-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  successSnackBar(message: string): MatSnackBarRef<TextOnlySnackBar> {
    return this._snackBar.open(message, undefined, {
      duration: 3000,
      panelClass: ['success-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  errorSnackBar(message: string, duration: number = 3000): MatSnackBarRef<TextOnlySnackBar> {
    return this._snackBar.open(message, undefined, {
      duration: duration,
      panelClass: ['error-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
