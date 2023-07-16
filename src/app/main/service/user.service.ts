import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {UserInfo} from "../model/userInfo";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  searchResultList: Array<UserInfo> = [];
  searchResultSubject: BehaviorSubject<Array<UserInfo>> = new BehaviorSubject<Array<UserInfo>>(this.searchResultList);

  constructor(private http: HttpClient) {
  }

  getCurrentUser(id: string): Observable<any> {
    return this.http.get<any>(`/api/user/get/${id}`)
      .pipe(map((user: any) => this.mapUserResponseToModel(user)));
  }

  searchUsers(firstName: string, lastName: string): void {
    this.http.get<Array<any>>(`/api/user/search`, {params: {"first_name": firstName, "last_name": lastName}})
      .pipe(map((users: Array<any>) => users.map(value => {
        return this.mapUserResponseToModel(value)
      }))).subscribe(value => {
        this.searchResultList = value;
        this.searchResultSubject.next(value);
    });
  }

  mapUserResponseToModel(value: any): UserInfo {
    let user = value;
    user.firstName = value.first_name;
    user.secondName = value.second_name;
    user.first_name = undefined;
    user.second_name = undefined;
    return user;
  }
}
