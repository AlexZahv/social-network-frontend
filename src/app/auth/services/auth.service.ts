import {Injectable} from '@angular/core';
import {Login} from "../models/login";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
              private http: HttpClient) {
  }

  getAccessToken = (): string => localStorage.getItem("access_token")!;

  storeTokenResponse = (tokenResponse: any): void => {
    localStorage.setItem("access_token", tokenResponse.token);
    this.processDefaultRedirect();
  };

  storeCurrentUser = (loginForm: any): void => {
    localStorage.setItem("user_id", loginForm?.id);
    this.processDefaultRedirect();
  };

  getCurrentUserId = (): string => {
    // @ts-ignore
    return localStorage.getItem("user_id");
  };

  processDefaultRedirect = () => {
    if (this.isLoggedIn()) {
      this.router.navigateByUrl('/main/users')
    } else {
      this.logout();
    }
  }

  doLogin = (loginModel: Login): Observable<any> => {
    return this.http.post<any>('/login', loginModel);
  };

  logout = (): void => {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  };

  isLoggedIn = () => !!this.getAccessToken();
}
