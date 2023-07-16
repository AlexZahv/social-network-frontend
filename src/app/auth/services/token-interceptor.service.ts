import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {catchError, finalize, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {SpinnerService} from "../../shared/services/spinner.service";
import {environment} from "../../../environments/environment";
import {SnackbarService} from "../../shared/services/snackbar-service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  private spinnerIgnoreUrlList = ['api/documents', 'assets'];

  constructor(private authService: AuthService,
              private router: Router,
              private spinnerService: SpinnerService,
              private snackBarService: SnackbarService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getAccessToken();
    if (!request.url.startsWith('http') && !request.url.startsWith('assets')) {
      request = request.clone({
        url: environment.backEndHost + request.url
      });
    }
    this.enableSpinner(request);

    if (token) {
      request = TokenInterceptorService.addTokenHeader(request, token);
    }

    return next.handle(request).pipe().pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 && !!err.url && !err.url.includes('login')) {
            this.authService.logout();
            this.disableSpinner(request);
            this.snackBarService.errorSnackBar('Session is closed. You will be redirected to login page');
          }
        }
        if (err.status !== 200) {
          this.snackBarService.errorSnackBar(err.error ? err.error.message : err.message);
        }

        if (err.status === 0) {
          this.snackBarService.errorSnackBar('Server is unavailable. Please, try to attempt later');
        }

        return throwError(err);
      }),
      finalize(() => this.disableSpinner(request))
    )
  }

  private enableSpinner(request: HttpRequest<any>) {
    if (!this.isUrlInIgnoreList(request.url)) {
      this.spinnerService.enableSpinner();
    }
  }

  private disableSpinner(request: HttpRequest<any>) {
    if (!this.isUrlInIgnoreList(request.url)) {
      this.spinnerService.disableSpinner();
    }
  }

  private isUrlInIgnoreList(url: string): boolean {
    return this.spinnerIgnoreUrlList.filter(value => url.toLowerCase().includes(value.toLowerCase())).length > 0;
  }

  private static addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    });
  }
}
