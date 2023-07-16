import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  versionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
  }

  getVersion(): Observable<VersionModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache'
      })
    };
    return this.http.get<VersionModel>(`assets/version.json`, httpOptions);
  }
}

export class VersionModel {
  version!: string;
}
